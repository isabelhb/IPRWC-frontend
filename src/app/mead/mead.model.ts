export class MeadBottle {
  private name: string
  private producer: String;
  private flavor: String;
  private volume: number;

  constructor(name: string, producer: string, flavor: string, private category: string[], volume: number) {
    this.producer = producer;
    this.flavor = flavor;
    this.volume = volume;
    this.name = name;
  }
}
