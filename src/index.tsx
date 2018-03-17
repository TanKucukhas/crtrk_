import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const httpLink = new HttpLink({uri: 'http://localhost:4000'});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <Route exact path="/" component={ProductList}/>
    </ApolloProvider>
  </Router>,
  document.getElementById('root') as HTMLElement,
)
;
registerServiceWorker();
