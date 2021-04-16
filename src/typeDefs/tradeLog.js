import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    tradeLogs(cursor: String, limit: Int): [Trade!]
    tradeLogsByCode(code: String!): [Trade!]
  }

  extend type Mutation {
    addTrade(input: addTradeInput): Trade
  }

  type Trade {
    id: ID!
    tradeDate: Date!
    code: String!
    action: String!
    price: Float!
    shares: Int!
    overrideFees: Float
    fees: Float
    net: Float
  }

  input addTradeInput {
    tradeDate: Date!
    code: String!
    action: String!
    price: Float!
    shares: Int!
    overrideFees: Float
  }
`;
