import { observable, action, computed } from 'mobx'

class BentoStore {
  @observable
  bentoList = []

  @action
  setBentoList = (list: any) => {
    Object.assign(this.bentoList, list)
  }

  @computed
  get count() {
    return this.bentoList.length;
  }
}

const store = new BentoStore()

export default store
