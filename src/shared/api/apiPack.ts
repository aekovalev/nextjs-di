import { inject, injectable } from 'inversify';
import { INVERSIFY_TYPES } from '@/shared/types/inversifyTypes';

@injectable()
export default class ApiPack {
    private readonly todosApiModule;

    constructor(
        @inject(INVERSIFY_TYPES.TodosApiModule) todosApiModule: any,
    ) {
        this.todosApiModule = todosApiModule;
    }
}
