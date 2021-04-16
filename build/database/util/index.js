'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.connection = connection;
exports.isValidObjectId = isValidObjectId;

var _regenerator = _interopRequireDefault(
  require('@babel/runtime/regenerator')
);

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
);

var _mongoose = require('mongoose');

/* eslint-disable no-console */
function connection() {
  return _connection.apply(this, arguments);
}

function _connection() {
  _connection = (0, _asyncToGenerator2['default'])(
    /*#__PURE__*/ _regenerator['default'].mark(function _callee() {
      return _regenerator['default'].wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.prev = 0;
                (0, _mongoose.set)('debug', true);
                _context.next = 4;
                return (0, _mongoose.connect)(process.env.MONGO_DB_URL, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
                });

              case 4:
                console.log('Database connected successfully.');
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);
                console.log(_context.t0);
                throw _context.t0;

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        null,
        [[0, 7]]
      );
    })
  );
  return _connection.apply(this, arguments);
}

function isValidObjectId(id) {
  return _mongoose.Types.ObjectId.isValid(id);
}
