import Stock from '../database/models/stock';

module.exports = {
  Query: {
    stockData: async (_, { cursor, limit = 100 }) => {
      const query = {};
      if (cursor) {
        // eslint-disable-next-line no-underscore-dangle
        query._id = {
          $gt: cursor,
        };
      }

      const trades = await Stock.find(query).sort({ _id: 1 }).limit(limit);

      return trades;
    },
    stockDataByCode: async (_, { code }) => {
      const trades = Stock.find({ code });

      return trades;
    },
  },
  Mutation: {
    addBulkStockData: async (_, { input }) => {
      const result = await Stock.insertMany(input.stocks);

      return result;
    },
  },
};
