import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    stockData(cursor: String, limit: Int): [StockData!]
    stockDataByCode(code: String!): [StockData!]
  }

  extend type Mutation {
    addBulkStockData(input: bulkStockDataInput): [StockData]
  }

  type StockData {
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

  input bulkStockDataInput {
    stocks: [stockInput!]
  }
`;
