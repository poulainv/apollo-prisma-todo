const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    completedTodos(root, args, context) {
      return context.prisma.todoes({ where: { isChecked: true } })
    },
    todo(root, args, context) {
      return context.prisma.todo({ id: args.todoId })
    },
    todos(root, args, context) {
      return context.prisma.todoes()
    },
    todosByUser(root, args, context) {
      return context.prisma
        .user({
          id: args.userId,
        })
        .todos()
    },
  },
  Mutation: {
    createTodo(root, args, context) {
      return context.prisma.createTodo({
        text: args.text,
        author: {
          connect: { id: args.userId },
        },
      })
    },
    toggleTodo(root, args, context) {
      return context.prisma.updateTodo({
        where: { id: args.todoId },
        data: { isChecked: args.isChecked },
      })
    },
    deleteTodo(root, args, context) {
      return context.prisma.deleteTodo({'id': args.todoId})
    },
    createUser(root, args, context) {
      return context.prisma.createUser({ name: args.name })
    },
  },
  Subscription: {
    todo: {
      subscribe: async (parent, args, context) => {
        return context.prisma.$subscribe
          .todo({
            mutation_in: ['CREATED', 'UPDATED'],
          })
          .node()
      },
      resolve: payload => {
        return payload
      },
    },
  },
  User: {
    todos(root, args, context) {
      return context.prisma
        .user({
          id: root.id,
        })
        .todos()
    },
  },
  Todo: {
    author(root, args, context) {
      return context.prisma
        .todo({
          id: root.id,
        })
        .author()
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))