import { inject, injectable } from 'inversify'
import { INVERSIFY_TYPES } from '@/shared/types/inversifyTypes'

@injectable()
export default class App {
  private readonly _api;
  private readonly _storeBusiness;

  constructor(
    @inject(INVERSIFY_TYPES.ApiPack) apiPack: any,
    @inject(INVERSIFY_TYPES.StoreBusiness) storeBusiness: any,
  ) {
    this._api = apiPack
    this._storeBusiness = storeBusiness
  }

  get api() {
    return this._api
  }

  get storeBusiness() {
    return this._storeBusiness
  }
}
