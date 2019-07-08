/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TodosByUser
// ====================================================

export interface TodosByUser_todos {
  __typename: "Todo";
  id: string;
  text: string;
  isChecked: boolean;
}

export interface TodosByUser {
  todos: TodosByUser_todos[];
}

export interface TodosByUserVariables {
  userId: string;
}
