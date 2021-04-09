/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface TodoApp {
    }
    interface TodoDetail {
        "match": MatchResults;
    }
    interface TodoList {
    }
}
declare global {
    interface HTMLTodoAppElement extends Components.TodoApp, HTMLStencilElement {
    }
    var HTMLTodoAppElement: {
        prototype: HTMLTodoAppElement;
        new (): HTMLTodoAppElement;
    };
    interface HTMLTodoDetailElement extends Components.TodoDetail, HTMLStencilElement {
    }
    var HTMLTodoDetailElement: {
        prototype: HTMLTodoDetailElement;
        new (): HTMLTodoDetailElement;
    };
    interface HTMLTodoListElement extends Components.TodoList, HTMLStencilElement {
    }
    var HTMLTodoListElement: {
        prototype: HTMLTodoListElement;
        new (): HTMLTodoListElement;
    };
    interface HTMLElementTagNameMap {
        "todo-app": HTMLTodoAppElement;
        "todo-detail": HTMLTodoDetailElement;
        "todo-list": HTMLTodoListElement;
    }
}
declare namespace LocalJSX {
    interface TodoApp {
    }
    interface TodoDetail {
        "match"?: MatchResults;
    }
    interface TodoList {
    }
    interface IntrinsicElements {
        "todo-app": TodoApp;
        "todo-detail": TodoDetail;
        "todo-list": TodoList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "todo-app": LocalJSX.TodoApp & JSXBase.HTMLAttributes<HTMLTodoAppElement>;
            "todo-detail": LocalJSX.TodoDetail & JSXBase.HTMLAttributes<HTMLTodoDetailElement>;
            "todo-list": LocalJSX.TodoList & JSXBase.HTMLAttributes<HTMLTodoListElement>;
        }
    }
}
