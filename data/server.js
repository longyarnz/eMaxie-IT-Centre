import Exp from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';
import cors from 'cors';
import ClearConsole from 'react-dev-utils/clearConsole';

const Port = 8080;

ClearConsole();

const App = Exp();
App.use("/", cors(), GraphHTTP({
		pretty: true,
		graphiql: true,
		schema: Schema
	})
);

App.listen(Port, ()=> console.log(`APP is running on ${Port}`));