import { gql } from 'apollo-server-express';
import tradeLog from './tradeLog';
import stockData from './stockData';

const typeDefs = gql`
  scalar Date

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export default [typeDefs, tradeLog, stockData];
