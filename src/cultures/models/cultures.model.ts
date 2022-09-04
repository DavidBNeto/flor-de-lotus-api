export class CulturesModel {
  constructor(
    public id: string,
    public nome: string,
    public coordenadas: [],
    public irrigacao: [
      {
        agua: Number;
        hora: Date;
      }
    ],
  ) {}
}
