import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    tradeLogs(cursor: String, limit: Int): [TradeLog!]
    tradeLogsByCode(code: String!): [TradeLog!]
  }

  extend type Mutation {
    addTrade(input: addTradeInput): TradeLog
  }

  type TradeLog {
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
