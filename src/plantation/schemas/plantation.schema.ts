import * as mongoose from 'mongoose';

export const PlantationSchema = new mongoose.Schema({
  hive: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hive',
  },
  coordenadas: [],
  cultures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cultures',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
