module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateTodo {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createTodo(data: TodoCreateInput!): Todo!
  updateTodo(data: TodoUpdateInput!, where: TodoWhereUniqueInput!): Todo
  updateManyTodoes(data: TodoUpdateManyMutationInput!, where: TodoWhereInput): BatchPayload!
  upsertTodo(where: TodoWhereUniqueInput!, create: TodoCreateInput!, update: TodoUpdateInput!): Todo!
  deleteTodo(where: TodoWhereUniqueInput!): Todo
  deleteManyTodoes(where: TodoWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  todo(where: TodoWhereUniqueInput!): Todo
  todoes(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo]!
  todoesConnection(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  todo(where: TodoSubscriptionWhereInput): TodoSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Todo {
  id: ID!
  text: String!
  isChecked: Boolean!
  author: User
}

type TodoConnection {
  pageInfo: PageInfo!
  edges: [TodoEdge]!
  aggregate: AggregateTodo!
}

input TodoCreateInput {
  id: ID
  text: String!
  isChecked: Boolean
  author: UserCreateOneWithoutTodosInput
}

input TodoCreateManyWithoutAuthorInput {
  create: [TodoCreateWithoutAuthorInput!]
  connect: [TodoWhereUniqueInput!]
}

input TodoCreateWithoutAuthorInput {
  id: ID
  text: String!
  isChecked: Boolean
}

type TodoEdge {
  node: Todo!
  cursor: String!
}

enum TodoOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  isChecked_ASC
  isChecked_DESC
}

type TodoPreviousValues {
  id: ID!
  text: String!
  isChecked: Boolean!
}

input TodoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  isChecked: Boolean
  isChecked_not: Boolean
  AND: [TodoScalarWhereInput!]
  OR: [TodoScalarWhereInput!]
  NOT: [TodoScalarWhereInput!]
}

type TodoSubscriptionPayload {
  mutation: MutationType!
  node: Todo
  updatedFields: [String!]
  previousValues: TodoPreviousValues
}

input TodoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoWhereInput
  AND: [TodoSubscriptionWhereInput!]
  OR: [TodoSubscriptionWhereInput!]
  NOT: [TodoSubscriptionWhereInput!]
}

input TodoUpdateInput {
  text: String
  isChecked: Boolean
  author: UserUpdateOneWithoutTodosInput
}

input TodoUpdateManyDataInput {
  text: String
  isChecked: Boolean
}

input TodoUpdateManyMutationInput {
  text: String
  isChecked: Boolean
}

input TodoUpdateManyWithoutAuthorInput {
  create: [TodoCreateWithoutAuthorInput!]
  delete: [TodoWhereUniqueInput!]
  connect: [TodoWhereUniqueInput!]
  set: [TodoWhereUniqueInput!]
  disconnect: [TodoWhereUniqueInput!]
  update: [TodoUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TodoUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [TodoScalarWhereInput!]
  updateMany: [TodoUpdateManyWithWhereNestedInput!]
}

input TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput!
  data: TodoUpdateManyDataInput!
}

input TodoUpdateWithoutAuthorDataInput {
  text: String
  isChecked: Boolean
}

input TodoUpdateWithWhereUniqueWithoutAuthorInput {
  where: TodoWhereUniqueInput!
  data: TodoUpdateWithoutAuthorDataInput!
}

input TodoUpsertWithWhereUniqueWithoutAuthorInput {
  where: TodoWhereUniqueInput!
  update: TodoUpdateWithoutAuthorDataInput!
  create: TodoCreateWithoutAuthorInput!
}

input TodoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  isChecked: Boolean
  isChecked_not: Boolean
  author: UserWhereInput
  AND: [TodoWhereInput!]
  OR: [TodoWhereInput!]
  NOT: [TodoWhereInput!]
}

input TodoWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  todos(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  todos: TodoCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTodosInput {
  id: ID
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  todos: TodoUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  update: UserUpdateWithoutTodosDataInput
  upsert: UserUpsertWithoutTodosInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTodosDataInput {
  name: String
}

input UserUpsertWithoutTodosInput {
  update: UserUpdateWithoutTodosDataInput!
  create: UserCreateWithoutTodosInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  todos_every: TodoWhereInput
  todos_some: TodoWhereInput
  todos_none: TodoWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    