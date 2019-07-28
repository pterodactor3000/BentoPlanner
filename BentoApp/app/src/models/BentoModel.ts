import { IBaseModel, BaseModel } from "./BaseModel";

export interface IBentoModel extends IBaseModel {
  title: string;
  season: string;
}

export class BentoModel extends BaseModel {
  title: string;
  season: string;

  constructor(value: IBentoModel) {
    super(value)
    this.id = value.id;
    this.title = value.title;
    this.name = value.name;
    this.season = value.season;
  }
}