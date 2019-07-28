export interface IBaseModel {
  id: number;
  name: string;
}

export class BaseModel {
  id: number;
  name: string;

  constructor(value: IBaseModel) {
    this.id = value.id;
    this.name = value.name;
  }
}