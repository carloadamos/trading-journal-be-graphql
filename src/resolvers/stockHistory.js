import StockHistory from '../database/models/stockHistory';

module.exports = {
  Query: {
    stockHistory: async (_, { cursor, limit = 100 }) => {
      const query = {};
      if (cursor) {
        // eslint-disable-next-line no-underscore-dangle
        query._id = {
          $gt: cursor,
        };
      }

      const trades = await StockHistory.find(query)
        .sort({ _id: 1 })
        .limit(limit);

      return trades;
    },
    stockHistoryByCode: async (_, { code }) => {
      const trades = StockHistory.find({ code });

      return trades;
    },
  },
  Mutation: {
    addBulkStockHistory: async (_, { input }) => {
      const result = await StockHistory.insertMany(input.stocks);

      return result;
    },
  },
};
