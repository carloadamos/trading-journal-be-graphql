/* eslint-disable no-console */
import express, { json } from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { config } from 'dotenv';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

import { connection } from './database/util';

config();

const app = express();

connection();

app.use(cors());

app.use(json());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

const PORT = process.env.PORT || 3000;

app.use('/', (req, res, next) => {
  res.send({ message: '' });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
  console.log(`Graphql endpoint: ${apolloServer.graphqlPath}`);
});
