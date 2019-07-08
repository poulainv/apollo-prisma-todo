/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: TodoSubscription
// ====================================================

export interface TodoSubscription_todo {
  __typename: "Todo";
  id: string;
  text: string;
  isChecked: boolean;
}

export interface TodoSubscription {
  todo: TodoSubscription_todo | null;
}
