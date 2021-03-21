/* eslint-disable no-console */
import { set, connect, Types } from 'mongoose';

export async function connection() {
  try {
    set('debug', true);
    await connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully.');
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export function isValidObjectId(id) {
  return Types.ObjectId.isValid(id);
}
