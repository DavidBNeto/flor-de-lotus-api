export class Plantmodel{
    constructor(
        public plant: string,
        public water_amt: number,
        public agrotoxic_amt: number,
        public water_time: Date,
        public agrotoxic_time: Date
    ) {}
}