import * as mongoose from 'mongoose';

export const MapSchema = new mongoose.Schema({
  hive: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hive',
  },
  coordinates: [],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
