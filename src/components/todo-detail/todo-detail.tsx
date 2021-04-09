import { Component, State, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'todo-detail',
  styleUrl: 'todo-detail.css',
  shadow: true,
})
export class TodoDetail {
  @State() match: MatchResults;

  render() {
    if (this.match && this.match.params.id) {
      return (
        <div class="todo-detail">
          <p>Hello! Details about this Task could go here</p>
          <p>The id of this task is {this.match.params.id}.</p>
                    
          <button>
            <stencil-route-link url="/">Back</stencil-route-link>
          </button>
        </div>
      );
    }
  }
}
