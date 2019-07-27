import { BentoFormModel, IBentoFormModel } from "../models/BentoFormModel";

export class ApiService {
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
        }, {        
          disabled: false,
          type: 'text',
          id: 'bento-name',
          label: 'Nazwa bento',
          defaultValue: 'Wiosenna miska obfitości',
          multiline: false
        }
      ]
    }
  }
}