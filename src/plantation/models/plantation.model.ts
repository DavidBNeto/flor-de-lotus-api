export class PlantationModel {
  constructor(
    public id: string,
    public coordenadas: [],
    public hive: string,
    public cultures: [
      {
        id: string;
      }
    ],
  ) {}
}
