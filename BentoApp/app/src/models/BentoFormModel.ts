import { BentoTextFieldPropsModel } from "./BentoTextFieldPropsModel";

export interface IBentoFormModel {
  textFields: Array<BentoTextFieldPropsModel>
}

export class BentoFormModel {
  textFields: Array<BentoTextFieldPropsModel> = [];

  constructor(values: IBentoFormModel) {
    this.textFields = values.textFields
  }
}