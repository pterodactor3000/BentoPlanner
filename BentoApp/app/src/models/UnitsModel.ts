import { IBaseModel, BaseModel } from "./BaseModel";

export interface IUnitsModel extends IBaseModel {
  type: string;
}

export class UnitsModel extends BaseModel {
  type: string;

  constructor(value: IUnitsModel) {
    super(value)
    this.id = value.id;
    this.name = value.name;
    this.type = value.type;
  }
}