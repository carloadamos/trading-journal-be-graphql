import { GraphQLDate } from 'graphql-iso-date';
import tradeLog from './tradeLog';
import stockData from './stockData';

const customDateScalarResolver = {
  Date: GraphQLDate,
};

export default [customDateScalarResolver, tradeLog, stockData];
