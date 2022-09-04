import * as mongoose from 'mongoose';

export const HiveSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
  },
  x: {
    type: String,
  },
  y: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
