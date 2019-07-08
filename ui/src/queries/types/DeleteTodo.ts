/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTodo
// ====================================================

export interface DeleteTodo_todo {
  __typename: "Todo";
  id: string;
  text: string;
  isChecked: boolean;
}

export interface DeleteTodo {
  todo: DeleteTodo_todo | null;
}

export interface DeleteTodoVariables {
  todoId: string;
}
