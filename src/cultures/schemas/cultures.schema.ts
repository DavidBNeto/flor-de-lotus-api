import * as mongoose from 'mongoose';

export const CulturesSchema = new mongoose.Schema({
  nome: {
    type: String,
  },
  coordenadas: {
    type: [],
  },

  irrigacao: {
    type: [
      {
        agua: Number,
        hora: Date,
      },
    ],
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
