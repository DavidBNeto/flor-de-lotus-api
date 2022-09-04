import * as mongoose from 'mongoose';

export const PlantsSchema = new mongoose.Schema({
    plant: { type: String, required: true },
    water_amt: { type: Number, default: "5" },
    agrotoxic_amt: { type: Number, default: "3" },
    water_time: { type: Date},
    agrotoxic_time: { type: Date},
});