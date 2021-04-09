import { Todo } from '../components/todo-app/types'
import { generateId, populateLocalStorage } from './utils'

export class FakeTodoApi {

  initialize() {
    window.localStorage.clear();
    populateLocalStorage();
  }

  create(todo) {
    todo.id = generateId();
    if (!todo.status) {
      todo.status = 'Ready';
    }
    localStorage.setItem(todo.id, JSON.stringify(todo)); 
  }

  retrieveAll() {
    let todos = Object.entries(localStorage).map(rawTodo => {
      const todo: Todo = JSON.parse(rawTodo[1]);
      return todo;
    })
  
    return todos;
  }

  retrieveById(id) {
    const rawTodo = localStorage.getItem(id);
    const todo: Todo = JSON.parse(rawTodo);
    return todo;
  }

  update(todo) {
    localStorage.setItem(todo.id, JSON.stringify(todo));
  }

  delete(todo) {
    localStorage.removeItem(todo.id); 
  }
}
