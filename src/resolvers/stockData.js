import StockData from '../database/models/stockData';

module.exports = {
  Query: {
    stockDataAll: async (_, { cursor, limit = 100 }) => {
      const query = {};
      if (cursor) {
        // eslint-disable-next-line no-underscore-dangle
        query._id = {
          $gt: cursor,
        };
      }

      const result = await StockData.find(query).sort({ _id: 1 }).limit(limit);

      return result;
    },
    stockDataByCode: async (_, { code }) => {
      const result = StockData.find({ code });

      return result;
    },
  },
  Mutation: {
    addStockData: async (_, { input }) => {
      const result = await StockData.insertMany(input);

      return result;
    },
    addStockDataBulk: async (_, { input }) => {
      const result = await StockData.insertMany(input.stocks);

      return result;
    },
  },
};
