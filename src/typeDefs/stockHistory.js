import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    stockHistory(cursor: String, limit: Int): [StockHistory!]
    stockHistoryByCode(code: String!): [StockHistory!]
  }

  extend type Mutation {
    addBulkStockHistory(input: bulkStockHistoryInput): [StockHistory]
  }

  type StockHistory {
    code: String!
    tradeDate: Date!
    open: Float!
    high: Float!
    low: Float!
    close: Float!
    volume: Float!
  }

  input stockInput {
    code: String!
    tradeDate: Date!
    open: Float!
    high: Float!
    low: Float!
    close: Float!
    volume: Float!
  }

  input bulkStockHistoryInput {
    stocks: [stockInput!]
  }
`;
