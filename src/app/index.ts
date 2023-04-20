
import 'reflect-metadata'
import { ContainerModule, interfaces, Container } from 'inversify'
import { INVERSIFY_TYPES } from '@/shared/types/inversifyTypes'
import App from '@/app/app'
import ApiAdapter from './adapters/apiAdapter'
import ApiPack from '@/shared/api/apiPack'
import TodosApiModule from '@/shared/api/todos/todosApiModule'
import StoreBusiness from '@/app/storeBusiness'

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind(INVERSIFY_TYPES.App).to(App).inSingletonScope()
  bind(INVERSIFY_TYPES.ApiAdapter).to(ApiAdapter).inSingletonScope()
  bind(INVERSIFY_TYPES.ApiPack).to(ApiPack).inSingletonScope()
  bind(INVERSIFY_TYPES.TodosApiModule).to(TodosApiModule).inSingletonScope()
  bind(INVERSIFY_TYPES.StoreBusiness).to(StoreBusiness).inSingletonScope()
});

const DIContainer = new Container()

DIContainer.load(appBindings)

const app = DIContainer.get<App>(INVERSIFY_TYPES.App)

export { app };
