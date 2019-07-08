/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ToggleTodo
// ====================================================

export interface ToggleTodo_todo {
  __typename: "Todo";
  id: string;
  text: string;
  isChecked: boolean;
}

export interface ToggleTodo {
  todo: ToggleTodo_todo | null;
}

export interface ToggleTodoVariables {
  todoId: string;
  isChecked?: boolean | null;
}
