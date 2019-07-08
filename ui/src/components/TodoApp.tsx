import React from 'react'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Container } from '@material-ui/core';

const TodoApp: React.FC = () => {

    return (
        <React.Fragment>
            <TodoForm />
            <Container maxWidth="sm">
                <TodoList/>
            </Container>
        </React.Fragment>
    )
}

export default TodoApp