import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    stockDataAll(cursor: String, limit: Int): [StockData!]
    stockDataByCode(code: String!): [StockData!]
  }

  extend type Mutation {
    addStockData(input: stockDataInput): [StockData]
    addStockDataBulk(input: bulkStockDataInput): [StockData]
  }

  type StockData {
    tickerSymbol: String!
    companyName: String!
    status: String!
  }

  input stockDataInput {
    tickerSymbol: String!
    companyName: String!
    status: String!
  }

  input bulkStockDataInput {
    stocks: [stockDataInput!]
  }
`;
