import { BentoFormModel } from "../models/BentoFormModel";

export class ApiService {
  getBentoForm = () => {
    return new BentoFormModel({ textFields: [] })
  }

  private createTextFields = () => {
    return [
      {
        disabled: false,
        type: 'text',
        id: 'bento-name',
        label: 'Nazwa bento',
        defaultValue: 'Wiosenna miska obfitości'
      }, {        
        disabled: false,
        type: 'text',
        id: 'bento-name',
        label: 'Nazwa bento',
        defaultValue: 'Wiosenna miska obfitości'
      }
    ]
  }
}