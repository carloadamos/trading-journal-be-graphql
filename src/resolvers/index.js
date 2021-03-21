import { GraphQLDate } from 'graphql-iso-date';
import tradeLog from './tradeLog';

const customDateScalarResolver = {
  Date: GraphQLDate,
};

export default [customDateScalarResolver, tradeLog];
