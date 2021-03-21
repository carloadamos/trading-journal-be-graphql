"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _express = _interopRequireWildcard(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = require("dotenv");

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _util = require("./database/util");

/* eslint-disable no-console */
(0, _dotenv.config)();
var app = (0, _express["default"])();
(0, _util.connection)();
app.use((0, _cors["default"])());
app.use((0, _express.json)());
var apolloServer = new _apolloServerExpress.ApolloServer({
  typeDefs: _typeDefs["default"],
  resolvers: _resolvers["default"]
});
apolloServer.applyMiddleware({
  app: app,
  path: '/graphql'
});
var PORT = process.env.PORT || 3000;
app.use('/', function (req, res, next) {
  res.send({
    message: 'Hello'
  });
});
app.listen(PORT, function () {
  console.log("Server listening on PORT: ".concat(PORT));
  console.log("Graphql endpoint: ".concat(apolloServer.graphqlPath));
});