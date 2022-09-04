export class Plantmodel{
    constructor(
        public plant: String,
        public water_amt: Number,
        public agrotoxic_amt: Number,
        public water_time: Date,
        public agrotoxic_time: Date
    ) {}
}