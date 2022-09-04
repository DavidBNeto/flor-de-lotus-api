export class PlantationModel {
  constructor(
    public id: string,
    public coordenadas: [],
    public hive: String,
    public cultures: [
      {
        id: String;
      }
    ],
  ) {}
}
