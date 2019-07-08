import React from 'react'
import { Typography, Paper, Container } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
import TodoApp from './components/TodoApp';
import { User } from './queries/types/User';

const user: User = {
  id: "cjxoi5c8r001e0803pcqfv1uc",
  name: "Vincent",
  __typename: 'User'
}

export const UserContext = React.createContext(user);

export const App: React.FC<{}> = (props) => {

  const useStyles = makeStyles({
    app: {
      margin: 20,
      padding: 20,
    }
  });
  const classes = useStyles()
  
  return (
    <UserContext.Provider value={user}>
          <Container maxWidth="sm">
            <Paper className={classes.app}>
              <Typography variant='h5' align='center' gutterBottom> {user.name}'s Todo List </Typography>
              <TodoApp/>
            </Paper>
          </Container>
          </UserContext.Provider>
        )
}