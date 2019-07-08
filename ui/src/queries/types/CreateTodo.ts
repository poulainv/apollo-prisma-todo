/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export interface CreateTodo_todo {
  __typename: "Todo";
  id: string;
  text: string;
  isChecked: boolean;
}

export interface CreateTodo {
  todo: CreateTodo_todo | null;
}

export interface CreateTodoVariables {
  text: string;
  userId: string;
}
