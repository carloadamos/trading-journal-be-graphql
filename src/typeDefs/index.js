import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export default [typeDefs];
