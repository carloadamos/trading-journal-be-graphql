"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlIsoDate = require("graphql-iso-date");

var customDateScalarResolver = {
  Date: _graphqlIsoDate.GraphQLDateTime
};
var _default = [customDateScalarResolver];
exports["default"] = _default;