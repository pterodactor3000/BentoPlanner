import { BentoFormModel, IBentoFormModel } from "../models/BentoFormModel";

export class BentoFormService {
  getBentoForm = () => {
    return new BentoFormModel(this.createTextFields())
  }

  private createTextFields(): IBentoFormModel {
    return {
      textFields: [
        {
          disabled: false,
          type: 'text',
          id: 'bento-name',
          label: 'Nazwa bento',
          defaultValue: 'Wiosenna miska obfitości',
          multiline: true,
          withUnits: false
        }, {        
          disabled: false,
          type: 'text',
          id: 'bento-name',
          label: 'Składnik',
          defaultValue: 'Makaron soba',
          multiline: false,
          withUnits: true
        }
      ]
    }
  }
}