import { Db, Item } from './database';

import { 
	GraphQLInputObjectType,
	GraphQLObjectType, 
	GraphQLInt, 
	GraphQLString, 
	GraphQLList, 
	GraphQLSchema,
	GraphQLNonNull 
	} from 'graphql';

import {
	connectionFromPromisedArray,
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  cursorForObjectInConnection
} from 'graphql-relay';

import {
  getModelsByClass,
  resolveArrayData,
  getArrayData,
  resolveArrayByClass,
  resolveModelsByClass
} from 'sequelize-relay';

const { nodeInterface, nodeField } = nodeDefinitions(
	(globalId) => {
		const { type, id } = fromGlobalId(globalId);
		if (type === 'Item') {
			return Item.findByPrimary(id);
		}
	}, 
	(obj) => {
		if (obj.type === 'itemType') {
      return itemType;
    }
	}
);

const itemType = new GraphQLObjectType({
	name: 'Item',
	description: 'This is a graphql table',
	fields: ()=>({
		id: globalIdField('Item', (obj)=>{return obj.niche}),
    niche: {
      type: GraphQLString,
      description: 'This is the niche for Item',
    //  resolve: (obj) => obj.niche
    },
		product: {
			type: GraphQLString,
			description: 'This is a product for Item',
		//	resolve: (obj) => obj.product
		},
		price: {
			type: GraphQLString,
			description: 'This is a price of an Item',
		//	resolve: (obj) => obj.price
		}
	}),
	interfaces: [nodeInterface]
});

const insertType = new GraphQLInputObjectType({
	name: 'Insert',
	description: 'This is an Insert Type',
	fields: ()=>({
		product: {
    	type: new GraphQLNonNull(GraphQLString),
    	description: 'This is the Product Insert Field'
    },
    price: {
    	type: GraphQLString,
    	description: 'This is the Price Insert Field'
    }
	})
});

const deleteType = new GraphQLInputObjectType({
  name: 'Delete',
  description: 'This is an Delete Type',
  fields: ()=>({
    niche: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'This is the Product Delete Field'
    },
    product: {
      type: GraphQLString,
      description: 'This is the Price Insert Field'
    }
  })
});

const {connectionType: itemConnection, edgeType: itemEdge} = connectionDefinitions({nodeType: itemType});

const queryType = new GraphQLObjectType({
	name: 'Query',
	description: 'This is the root query',
	fields: ()=>({
		marketItems: {
			type: itemConnection,
			args: connectionArgs,
			resolve: (root, args) => connectionFromPromisedArray(resolveModelsByClass(Item, {order: [['createdAt', 'ASC']]}), args)
		},
		node: nodeField
	})
});

const GraphQLAddItemMutation = mutationWithClientMutationId({
  name: 'AddItem',
  description: 'This is the AddItem Mutation',
  inputFields: {
    sender: {
    	type: insertType,
    	description: 'This is an Insert Type'
    }
  },
  outputFields: {
    product: {
    	type: new GraphQLNonNull(GraphQLString),
    	description: 'This is the Product Input Field'
    },
    price: {
    	type: GraphQLString,
    	description: 'This is the Price Input Field'
    },
    result: {
    	type: itemEdge,
    	description: 'Extra Output Fields',
    	resolve: ({niche}) => {
    		return connectionFromPromisedArray(resolveModelsByClass(Item, {where: {niche}}), connectionArgs).then((response) => {
    			return response.edges[response.edges.length - 1]
    		})
    	}
    }
  },
  mutateAndGetPayload: ({sender: {product, price}}) => {
  	return Item.create({
			product,
			price
		})
  }
});

const GraphQLDeleteItemMutation = mutationWithClientMutationId({ 
  name: 'DeleteItem',
  description: 'This is the DeleteItem Mutation',
  inputFields: {
    sender: {
      type: deleteType,
      description: 'This is a Delete Type'
    }
  },
  outputFields: {
    result: {
      type: itemEdge,
      description: 'Extra Output Fields',
      resolve: (payload) => {
        return payload.shouldDelete;        
      }
    }
  },
  mutateAndGetPayload: (missile) => {
    const filter = {};
    for (var x in missile.sender){
      if (x !== null) filter[x] = missile.sender[x];
    };  
    const shouldDelete = connectionFromPromisedArray(Item.findAll({where: filter}), connectionArgs).then((response) => {
      Item.destroy({where: filter});
      return response.edges[response.edges.length - 1];
    });
    return {shouldDelete};
  }
});

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is the root mutation',
  fields: {
    addedItem: GraphQLAddItemMutation,
    deletedItem: GraphQLDeleteItemMutation
  },
});

const Schema = new GraphQLSchema({
	query: queryType,
	mutation: mutationType
});

//console.log(Schema);

export default Schema;