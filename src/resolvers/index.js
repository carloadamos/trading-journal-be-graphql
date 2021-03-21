import { GraphQLDateTime } from 'graphql-iso-date';

const customDateScalarResolver = {
  Date: GraphQLDateTime,
};

export default [customDateScalarResolver];
