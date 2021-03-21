import TradeLog from '../database/models/tradeLog';

module.exports = {
  Query: {
    tradeLogs: async () => TradeLog.find(),
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
