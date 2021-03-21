import TradeLog from '../database/models/tradeLog';

module.exports = {
  Query: {
    tradeLogs: async (_, { cursor, limit = 2 }) => {
      const query = {};
      if (cursor) {
        // eslint-disable-next-line no-underscore-dangle
        query._id = {
          $gt: cursor,
        };
      }

      const tradeLogs = await TradeLog.find(query)
        .sort({ _id: 1 })
        .limit(limit);

      return tradeLogs;
    },
    tradeLogsByCode: async (_, { code }) => {
      const tradeLogs = TradeLog.find({ code });

      return tradeLogs;
    },
  },
  Mutation: {
    addTrade: async (_, { input }) => {
      const newTrade = new TradeLog({
        ...input,
        tradeDate: new Date(input.tradeDate),
        fees: 100, // TODO: Calculate fee
        net: 1000, // TODO: Calculate net
      });
      const result = await newTrade.save();

      return result;
    },
  },
};
