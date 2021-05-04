import { Schema, model } from 'mongoose';

const stockHistorySchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    tradeDate: {
      type: Date,
      required: true,
    },
    open: {
      type: Number,
      required: true,
    },
    high: {
      type: Number,
      required: true,
    },
    low: {
      type: Number,
      required: true,
    },
    close: {
      type: Number,
      required: false,
    },
    volume: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model('StockHistory', stockHistorySchema);
