import { observable, action, computed } from 'mobx'
import { BentoModel } from '../models/BentoModel';
import { BaseModel } from '../models/BaseModel';
import { UnitsModel } from '../models/UnitsModel';
import { BentoFormModel } from '../models/BentoFormModel';

class BentoStore {
  @observable bentoList: BentoModel[] = []
  @observable unitsList: UnitsModel[] = []
  @observable seasonsList: BaseModel[] = []
  @observable bentoForm: BentoFormModel[] = []

  @action
  setBentoList = (list: BentoModel[]) => {
    this.bentoList.splice(0)
    this.bentoList.push(...list)
  }

  @action
  setUnitsList = (list: UnitsModel[]) => {
    this.unitsList.splice(0)
    this.unitsList.push(...list)
  }

  @action
  setSeasonsList = (list: BaseModel[]) => {
    this.seasonsList.splice(0)
    this.seasonsList.push(...list)
  }

  @computed
  get countBento() {
    return this.bentoList.length
  }

  @computed
  get listBento() {
    return this.bentoList
  }

  @computed
  get listUnits() {
    return this.unitsList
  }

  @computed
  get listSeasons() {
    return this.seasonsList
  }
}

const store = new BentoStore()

export default store
