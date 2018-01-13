import SQL from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';

const Db = new SQL('cart', 'lekan', 'longyarn', {dialect: 'mysql', host: '127.0.0.1'});
if(Db) console.log('Database Connected');

const Item = Db.define('Item', {
	type: {
    type: new SQL.VIRTUAL(SQL.STRING),
    get() {
      return 'itemType';
    }
  },
  niche: {
    type: SQL.UUID,
    allowNull: false,
    defaultValue: SQL.UUIDV4,
    primaryKey: true
  },
	product: {
  	type: SQL.STRING,
  	allowNull: false
	},
  price: {
    type: SQL.STRING,
    allowNull: true
  }
});

// Db.sync({force: true});
// console.log(Items);

// Db.sync({force: true}).then(()=>{
// 	_.times(5, ()=>{
// 		return Item.create({
// 		  product: Faker.name.firstName(),
//       price: Faker.name.lastName(),
// 		})
// 	})
// }).then(console.log("Entries Completed"));

export { Db, Item };