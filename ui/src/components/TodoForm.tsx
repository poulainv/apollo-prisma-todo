import React, { useContext } from "react"

import { useState, FormEvent } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";

import { createTodoQuery, todosQuery } from "../queries";
import { CreateTodo, CreateTodoVariables } from "../queries/types/CreateTodo"
import { TodosByUser, TodosByUserVariables } from '../queries/types/TodosByUser';
import { User } from '../queries/types/User';

import { useMutation } from "react-apollo-hooks"
import { UserContext } from "../App";

const useCreateTodoMutation = (item: string, userId: string) => {
    // Example with apollo hooks mutation
    // Unfortunately useMutation does not return loading variable and does not
    // expose onComplete args to manage lifecycle
    // Cache update should be explicitely specify when appending item to the list 
    // Optimistic response is declared in order to improve UX when slow 3G
    return useMutation<CreateTodo, CreateTodoVariables>(createTodoQuery, {
        variables: { text: item, userId: userId },
        optimisticResponse: {
            todo: {
                id: Math.round(Math.random() * -1000).toString(),
                text: item,
                isChecked: false,
                __typename: 'Todo'
            }
        },
        update: (cache, { data: addTodo }) => {
            const cacheId = { query: todosQuery, variables: {userId: userId} }
            const data = cache.readQuery<TodosByUser, TodosByUserVariables>(cacheId)
            if (data === null) return
            cache.writeQuery({
                ...cacheId,
                data: { todos: data.todos.concat([addTodo.todo])},
            });
        },
    })

}

const TodoForm: React.FC = () => {

    const useStyles = makeStyles({
        form: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-evenly'
        }
    })
    const classes = useStyles()

    const user: User = useContext(UserContext)

    const [item, setItem] = useState<string>("")

    const createTodo = useCreateTodoMutation(item, user.id)

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        createTodo()
        setItem("")
    }

    return (
        <form className={classes.form}
            onSubmit={onSubmit}>
            <TextField
                type="text"
                label="To-do"
                name="todo"
                value={item}
                margin="normal"
                onChange={(event) => setItem(event.target.value)}></TextField>
            <Button
                type='submit'
                color='primary'
                variant='outlined'>
                Create
            </Button>
        </form>
    )
}
export default TodoForm