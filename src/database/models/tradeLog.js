import { Schema, model } from 'mongoose';

const tradeLogSchema = new Schema(
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

export default model('TradeLog', tradeLogSchema);
