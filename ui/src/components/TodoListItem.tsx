import React from "react"
import Delete from '@material-ui/icons/Delete'
import { makeStyles } from "@material-ui/styles";
import { ListItem, Checkbox, ListItemIcon, ListItemSecondaryAction, IconButton, FormControlLabel, Typography } from "@material-ui/core";
import { User } from '../queries/types/User';
import { Mutation, compose } from "react-apollo";
import { toggleTodoQuery, deleteTodoQuery, todosQuery } from "../queries";
import { TodoItem } from "../queries/types/TodoItem";
import { ToggleTodo, ToggleTodoVariables } from "../queries/types/ToggleTodo";
import { DeleteTodo, DeleteTodoVariables } from "../queries/types/DeleteTodo";


type TogglableTodoItem = {
    onToggle: (id: string, isChecked: boolean) => void
}

type DeletableTodoItem = {
    onDelete: (id: string) => void
}

// Hack to know if the item comes from optimistic UI
// We could have defined new attribute isNew: boolean
export const isOptimisticItem: (item: {id: string}) => boolean = (item) => item.id.startsWith('-')

const TodoListItem: React.FC<TogglableTodoItem & TodoItem & DeletableTodoItem & {user:User}> = (props) => {

    const useStyles = makeStyles({
        label: {
            textDecoration: props.isChecked ? 'line-through' : 'inherit'
        }
    })
    const classes = useStyles();

    return (    
        <ListItem>
            <FormControlLabel
                classes={classes}
                disabled={isOptimisticItem(props)}
                label={<Typography variant="body2">
                    {props.text}
                </Typography>}
                control={
                    <ListItemIcon >
                        <Checkbox
                            edge="start"
                            checked={props.isChecked}
                            tabIndex={-1}
                            // Element is disabled when item comes from optimistic response to avoid issues TODO improve that
                            disabled={isOptimisticItem(props)}
                            onChange={() => props.onToggle(props.id, !props.isChecked)}
                        />
                    </ListItemIcon>
                } />
            <ListItemSecondaryAction>
                <IconButton 
                color='primary' 
                disabled={isOptimisticItem(props)}
                onClick={() => props.onDelete(props.id)}> <Delete /> </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

// Overkilled example of HOC to isolate toggle mutation code.
function withTogglableTodoItem(WrappedComponent: React.FC<TogglableTodoItem>): React.FC<TodoItem> {
    return (props: TodoItem) => {
        return (
            // Mutation with automatic update and optimistic response
            // 1. Pretty convenient here
            //     - no refetchQueries provided = no remote access 
            //     - no update function provided to specificy how to update the cache / store
            // => Apollo Cache is automatically updated. This "magic" happens because todo id and todo updated params are returned by mutation call
            // 2. User experience in slow 3G is still good because optimistic response is provided
            <Mutation<ToggleTodo, ToggleTodoVariables> mutation={toggleTodoQuery} optimisticResponse={{ todo: { ...props, isChecked: !props.isChecked } }} >
                {
                    toggleTodoQuery => {
                        return (
                            <WrappedComponent {...props} onToggle={(id: string, isChecked: boolean) => toggleTodoQuery({ variables: { todoId: id, isChecked: isChecked } })} />
                        )
                    }
                }
            </Mutation>
        )
    }
}

function withDeletableTodoItem(WrappedComponent: React.FC<DeletableTodoItem>): React.FC<TodoItem & {user: User}> {
    return (props: TodoItem & {user: User}) => {
        return (
            // No magic happen here cause it's a delete mutation. 2 choices:
            // 1. (implemented) Simply ask for refetchQueries depending on this mutation
            // 2. Manually implement how to update the cache with update function
            // Fist option is easier but it gives very bad user experience with slow 3G because item is deleted only when todosQuery actually refetched
            // Second option is more verbose but allow to implement optimistic response to make UX better 
            <Mutation<DeleteTodo, DeleteTodoVariables> mutation={deleteTodoQuery} refetchQueries={[{query: todosQuery, variables: {userId: props.user.id}}]}>
                {
                    deleteTodoQuery => {
                        return (
                            <WrappedComponent {...props} onDelete={(id: string) => deleteTodoQuery({ variables: { todoId: id} })} />
                        )
                    }
                }
            </Mutation>
        )
    }
}

export default compose(
    withTogglableTodoItem,
    withDeletableTodoItem
)(TodoListItem)
