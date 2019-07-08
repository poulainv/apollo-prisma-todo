import React, { useContext } from "react"
import { List, Box, CircularProgress, Container, Grow } from "@material-ui/core";
import { User } from '../queries/types/User';
import TodoListItem from "./TodoListItem";
import { todosQuery } from '../queries';
import { TodosByUser, TodosByUserVariables } from '../queries/types/TodosByUser';
import { makeStyles } from "@material-ui/styles";
import { UserContext } from "../App";
import { useQuery } from "react-apollo-hooks";


const useTodoListQuery = (userId: string) => {
    return useQuery<TodosByUser, TodosByUserVariables>(todosQuery, {
        variables: { userId: userId },
        pollInterval: 5000
    })
}

const TodoList: React.FC = () => {

    const useStyles = makeStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        progress: {
            marginTop: '2em',
            marginBottom: '2em'
        }
    });
    const classes = useStyles()

    // useContext example usage
    // How less convenient is it to test as is no longer pass as simple props ?
    const user: User = useContext(UserContext)

    const { data, loading, error } = useTodoListQuery(user.id)

    if (error || data === undefined) return <p>Error :(</p>

    if (!loading && data.todos.length === 0) return <p>No todo yet.</p>

    return (
        <List>
            {data.todos && data.todos.map(item => {
                return (
                    <Grow timeout={500} in={true} key={item.id}>
                        <Box key={item.id}>
                            <TodoListItem
                                {...item}
                                user={user}
                            />
                        </Box>
                    </Grow>
                )
            })}
            {loading &&
                <Container className={classes.root}>
                    <CircularProgress className={classes.progress} />
                </Container>
            }
        </List>
    )


}



export default TodoList