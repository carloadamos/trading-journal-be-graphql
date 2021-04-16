'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _graphqlIsoDate = require('graphql-iso-date');

var _tradeLog = _interopRequireDefault(require('./tradeLog'));

var customDateScalarResolver = {
  Date: _graphqlIsoDate.GraphQLDate,
};
var _default = [customDateScalarResolver, _tradeLog['default']];
exports['default'] = _default;
