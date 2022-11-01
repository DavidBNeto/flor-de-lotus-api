import * as mongoose from 'mongoose';

export const typesRole = ['admin', 'user'];

export const UserSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  access_lvl: {
    type: String,
    default: typesRole[1],
    enum: typesRole,
    required: true,
  },
  pin: {
    type: String,
    required: true,
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
