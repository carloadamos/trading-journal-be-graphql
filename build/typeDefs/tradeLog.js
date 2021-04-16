'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral')
);

var _apolloServerExpress = require('apollo-server-express');

var _templateObject;

var _default = (0, _apolloServerExpress.gql)(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  extend type Query {\n    tradeLogs(cursor: String, limit: Int): [Trade!]\n    tradeLogsByCode(code: String!): [Trade!]\n  }\n\n  extend type Mutation {\n    addTrade(input: addTradeInput): Trade\n  }\n\n  type Trade {\n    id: ID!\n    tradeDate: Date!\n    code: String!\n    action: String!\n    price: Float!\n    shares: Int!\n    overrideFees: Float\n    fees: Float\n    net: Float\n  }\n\n  input addTradeInput {\n    tradeDate: Date!\n    code: String!\n    action: String!\n    price: Float!\n    shares: Int!\n    overrideFees: Float\n  }\n',
    ]))
);

exports['default'] = _default;
