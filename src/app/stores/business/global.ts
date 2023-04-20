import { makeObservable, observable, action } from 'mobx'
import { app } from '@/app';

class GlobalStore {
  todos = []

  constructor() {
    makeObservable(this, {
        todos: observable,
        getTodos: action,
        hydrateTodos: action,
    })
  }

  async getTodos() {
    this.todos = await app.api.todosApiModule.getTodos();
  }

  hydrateTodos(todos: any) {
    this.todos = todos;
  }
}

const global = new GlobalStore()

export default global
