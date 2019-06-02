import { observable, action, computed } from 'mobx'

class BentoStore {
  @observable bentoList: any[] = []

  @action
  setBentoList = (list: any) => {
    this.bentoList.splice(0)
    this.bentoList.push(...list)
  }

  @computed
  get count() {
    return this.bentoList.length
  }

  @computed
  get list() {
    return this.bentoList
  }
}

const store = new BentoStore()

export default store
