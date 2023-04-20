import { injectable } from 'inversify';
import global from '@/app/stores/business/global';

@injectable()
export default class StoreBusiness {
  readonly global;

  constructor() {
    this.global = global;
  }
}

