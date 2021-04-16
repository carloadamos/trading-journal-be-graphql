'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _regenerator = _interopRequireDefault(
  require('@babel/runtime/regenerator')
);

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _tradeLog = _interopRequireDefault(require('../database/models/tradeLog'));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2['default'])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

module.exports = {
  Query: {
    tradeLogs: (function () {
      var _tradeLogs = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee(_, _ref) {
          var cursor, _ref$limit, limit, query, trades;

          return _regenerator['default'].wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  (cursor = _ref.cursor),
                    (_ref$limit = _ref.limit),
                    (limit = _ref$limit === void 0 ? 100 : _ref$limit);
                  query = {};

                  if (cursor) {
                    // eslint-disable-next-line no-underscore-dangle
                    query._id = {
                      $gt: cursor,
                    };
                  }

                  _context.next = 5;
                  return _tradeLog['default']
                    .find(query)
                    .sort({
                      _id: 1,
                    })
                    .limit(limit);

                case 5:
                  trades = _context.sent;
                  return _context.abrupt('return', trades);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        })
      );

      function tradeLogs(_x, _x2) {
        return _tradeLogs.apply(this, arguments);
      }

      return tradeLogs;
    })(),
    tradeLogsByCode: (function () {
      var _tradeLogsByCode = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee2(_, _ref2) {
          var code, trades;
          return _regenerator['default'].wrap(function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  code = _ref2.code;
                  trades = _tradeLog['default'].find({
                    code: code,
                  });
                  return _context2.abrupt('return', trades);

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        })
      );

      function tradeLogsByCode(_x3, _x4) {
        return _tradeLogsByCode.apply(this, arguments);
      }

      return tradeLogsByCode;
    })(),
  },
  Mutation: {
    addTrade: (function () {
      var _addTrade = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/ _regenerator['default'].mark(function _callee3(_, _ref3) {
          var input, newTrade, result;
          return _regenerator['default'].wrap(function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  input = _ref3.input;
                  newTrade = new _tradeLog['default'](
                    _objectSpread(
                      _objectSpread({}, input),
                      {},
                      {
                        tradeDate: new Date(input.tradeDate),
                        overrideFees: input.overrideFees || 0,
                        fees: 100,
                        // TODO: Calculate fee
                        net: 1000, // TODO: Calculate net
                      }
                    )
                  );
                  _context3.next = 4;
                  return newTrade.save();

                case 4:
                  result = _context3.sent;
                  return _context3.abrupt('return', result);

                case 6:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3);
        })
      );

      function addTrade(_x5, _x6) {
        return _addTrade.apply(this, arguments);
      }

      return addTrade;
    })(),
  },
};
