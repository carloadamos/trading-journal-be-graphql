import TradeLog from '../database/models/tradeLog';

module.exports = {
  Query: {
    tradeLogs: async (_, { cursor, limit = 100 }) => {
      const query = {};
      if (cursor) {
        // eslint-disable-next-line no-underscore-dangle
        query._id = {
          $gt: cursor,
        };
      }

      const trades = await TradeLog.find(query).sort({ _id: 1 }).limit(limit);

      return trades;
    },
    tradeLogsByCode: async (_, { code }) => {
      const trades = TradeLog.find({ code });

      return trades;
    },
  },
  Mutation: {
    addTrade: async (_, { input }) => {
      const newTrade = new TradeLog({
        ...input,
        tradeDate: new Date(input.tradeDate),
        overrideFees: input.overrideFees || 0,
        fees: 100, // TODO: Calculate fee
        net: 1000, // TODO: Calculate net
      });
      const result = await newTrade.save();

      return result;
    },
  },
};
