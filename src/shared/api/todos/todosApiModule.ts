import { inject, injectable } from 'inversify'
import { INVERSIFY_TYPES } from '@/shared/types/inversifyTypes'

@injectable()
export default class TodosApiModule {
    private readonly apiAdapter;

    constructor(@inject(INVERSIFY_TYPES.ApiAdapter) apiAdapter: any) {
      this.apiAdapter = apiAdapter;
    }
  
    async getTodos(): Promise<any> {
        try {
            return await this.apiAdapter.request('/todos');
        } catch (e) {
            return Promise.reject(new Error('Something bad happened'))
        }
    }
}