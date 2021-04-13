import { 
  Component,  
  h,
  State,
  Watch,
} from '@stencil/core';
import { FakeTodoApi } from '../../fake-api/fake-api'
import { Todo } from '../todo-app/types'


@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})

export class TodoList {
  
  @State() api: any;
  @State() refresh: boolean;
  @State() todos: Todo[];

  @Watch('refresh')
  refreshHandler() {
    if (this.refresh) {
      this.refresh = false;
    } 
  }

  componentWillLoad() {
    this.api = new FakeTodoApi();
    this.api.initialize();
    this.todos = this.api.retrieveAll();
    this.refresh = false;
  }

  private handleSubmit(todo: Todo) {
    if (!this.auditTodoForm(todo)) {
      todo.active = false;
      if (!todo.id) {
        this.api.create(todo);
      } else {
        this.api.update(todo);
      }
      this.refresh = true;
    }
  }
  
  private handleDelete(todo: Todo) {
    alert('Would you like to delete this item?');
    this.api.delete(todo);
    this.refresh = true;
    this.todos = this.api.retrieveAll();
  }

  private handleTodoChange(event: any, index: number) {
    this.todos[index][event.target.id] = event.target.value;
  }

  private handleCancel(todo: Todo, index: number) {
    if (todo.id) {
      const oldTodo: Todo = this.api.retrieveById(todo.id);
      this.todos[index] = {...this.todos[index], ...oldTodo};

    } else {
      this.todos.splice(index, 1);
    }
    this.refresh = true;
  }

  private showTodoForm(index: number) {
    this.todos[index] = {...this.todos[index], active: true};
    this.refresh = true;
  }

  private showAddTodoForm() {
    let newTodo: Todo = {active: true};
    this.todos = [...this.todos, newTodo];
    this.refresh = true;
  }

  private auditTodoForm(todo: Todo) {
    if (!todo.name) {
      alert('Please enter a task name.');
      return true;
    }
    if (!todo.description) {
      alert("Please enter a task description.");
      return true;
    }
    return false;
  }

  render() {
    return (
      <div class="todo-list">
        <table id="todo-list-table" class="">
          <thead>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <th>
                <div title="Urgent">Urgent</div>
              </th>
              <th>
                <div title="Task">Task</div>
              </th>
              <th>
                <div title="Description">Description</div>
              </th>
              <th>
                <div title="Status">Status</div>
              </th>
             
              <th>
                <div title="Due Date">Due Date</div>
              </th>
              <th>
                <div title="Completed">Completed?</div>
              </th>
              <th></th>
            </tr>
            {this.todos.map((todo, index) => {
              if (todo.active === false) {
                return (
                  <tr id={`row-${todo.id}`}>
                    <td>
                      <button onClick={() => this.showTodoForm(index)}>Edit</button>
                    </td>
                    <td data-label="Urgent">
                      <div title={`${todo.id}-${todo.urgent}`}>{todo.urgent ? <p>!</p> : <p></p>}</div>
                    </td>
                    <td data-label="Task">
                      <div title={todo.name}>
                        <stencil-route-link url={`/task/${todo.id}`}>{todo.name}</stencil-route-link>
                      </div>
                    </td>
                    <td data-label="Description">
                      <div title={todo.description}>{todo.description}</div>
                    </td>
                    <td data-label="Status">
                      <div title={todo.status}>{todo.status}</div>
                    </td>
                    
                    <td data-label="Due Date">
                      <div title={todo.targetCompletionDate}>{todo.targetCompletionDate}</div>
                    </td>
                    <td data-label="Completed">
                      <div title={todo.completionDate}>{todo.completionDate}</div>
                    </td>
                    <td>
                      <button onClick={() => this.handleDelete(todo)}>Delete</button>
                    </td>
                  </tr>
                )
              } else {
                return (
                  <tr id={`row-${todo.id}`}>
                    <td>
                      <button onClick={() => this.handleCancel(todo, index)}>X</button>
                    </td>
                    <td data-label="Urgent">
                      <input id="urgent" type="checkbox" checked={todo.urgent} onInput={(event) => this.handleTodoChange(event, index)} />
                    </td>
                    <td data-label="Task">
                      <input id="name" type="text" value={todo.name} onInput={(event) => this.handleTodoChange(event, index)} />
                    </td>
                    <td data-label="Description">
                      <input id="description" type="text" value={todo.description} onInput={(event) => this.handleTodoChange(event, index)} />
                    </td>
                    <td data-label="Status">
                      <select id="status" onInput={(event) => this.handleTodoChange(event, index)}>
                        <option value="Ready" selected={todo.status === 'Ready'}>Ready</option>
                        <option value="In Progress" selected={todo.status === 'In Progress'}>In Progress</option>
                        <option value="On Hold" selected={todo.status === 'On Hold'}>On Hold</option>
                        <option value="Done" selected={todo.status === 'Done'}>Done</option>
                      </select>
                    </td>
                    <td data-label="Due Date">
                      <input id="targetCompletionDate" type="date" value={todo.targetCompletionDate} onInput={(event) => this.handleTodoChange(event, index)} />
                    </td>
                    <td data-label="Completed">
                      <input id="completionDate" type="date" value={todo.completionDate} onInput={(event) => this.handleTodoChange(event, index)} />
                    </td>
                    <td>
                      <input id="submit" type="submit" value="Save" onClick={() => this.handleSubmit(todo)}/>
                    </td>  
                  </tr>
                )
              }
            })}
            
          </tbody>
        </table>
        <button class="add" onClick={() => this.showAddTodoForm()}>Add</button>
      </div>
    );
  }
}