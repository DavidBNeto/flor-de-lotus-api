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

// import * as mongoose from 'mongoose';
// const Schema = mongoose.Schema;

// const CulturesSchema = new Schema({
//     plant: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Plants"
//         },
//     coordinates: [
//         {x: { type: Number }},
//         {y: { type: Number }}
//     ]
// });

// export const Cultures = mongoose.model("Cultures", CulturesSchema);
