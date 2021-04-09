import { Component, h } from '@stencil/core';

@Component({
  tag: 'todo-app',
  styleUrl: 'todo-app.css',
  shadow: true,
})
export class TodoApp {
  render() {
    return (
      <div>
        <header>
          <h1>My Tasks</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="todo-list" exact={true} />
              <stencil-route url="/task/:id" component="todo-detail" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
