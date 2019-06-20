export interface BentoAttributes {
  id: number;
  title: string;
  name: string;
  season: string;
}

export class BentoModel {
  id: number;
  title: string;
  name: string;
  season: string;

  constructor(value: BentoAttributes) {
    this.id = value.id;
    this.title = value.title;
    this.name = value.name;
    this.season = value.season;
  }
}