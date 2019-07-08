import gql from "graphql-tag";

const todoFragment = gql`
  fragment TodoItem on Todo {
    id
    text
    isChecked
  }`

const userFragment = gql`
  fragment User on User {
    id
    name
  }
`


export const todosQuery = gql`
query TodosByUser($userId: ID!) 
  {
    todos: todosByUser(userId: $userId) {
      ...TodoItem
    }
  }
  ${todoFragment}
  `

export const todoSubscription = gql`
subscription TodoSubscription{
  todo {
    id
  	text
    isChecked
  }
}
`

export const toggleTodoQuery = gql`
  mutation ToggleTodo($todoId: ID!, $isChecked: Boolean) {
    todo: toggleTodo(todoId: $todoId, isChecked: $isChecked) {
      ...TodoItem
    }
  }
  ${todoFragment}
  `

export const deleteTodoQuery = gql`
mutation DeleteTodo($todoId: ID!) {
  todo: deleteTodo(todoId: $todoId) {
    ...TodoItem
  }
}
${todoFragment}
`

export const createTodoQuery = gql`
mutation CreateTodo($text: String!, $userId: ID!){
  todo: createTodo(text: $text, userId: $userId) {
    ...TodoItem
  }
}
${todoFragment}
`