'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _mongoose = require('mongoose');

var tradeLogSchema = new _mongoose.Schema(
  {
    tradeDate: {
      type: Date,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    shares: {
      type: Number,
      required: true,
    },
    overrideFees: {
      type: Number,
      required: false,
    },
    fees: {
      type: Number,
      required: false,
    },
    net: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

var _default = (0, _mongoose.model)('TradeLog', tradeLogSchema);

exports['default'] = _default;
