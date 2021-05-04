import { Schema, model } from 'mongoose';

const stockDataSchema = new Schema(
  {
    tickerSymbol: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('StockData', stockDataSchema);
