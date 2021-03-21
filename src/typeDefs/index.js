import { gql } from 'apollo-server-express';
import tradeLog from './tradeLog';

const typeDefs = gql`
  scalar Date

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export default [typeDefs, tradeLog];
