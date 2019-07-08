import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import {App} from './App';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
// import * as serviceWorker from './serviceWorker';



const client = new ApolloClient({
  uri: "http://localhost:4000",
});


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
      
        <App/>
        {/* </UserContext.Provider> */}
      </ApolloHooksProvider>
    </ApolloProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);


// export default UserContext