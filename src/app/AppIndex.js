import React, {Component} from 'react';
import Home from './Home'
import Cities from './Cities'
import {ApolloProvider} from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'http://localhost:5000/graphql'
    })
  ]),
  cache: new InMemoryCache()
});

class AppIndex extends Component {
  render(){
    return(<ApolloProvider client={client}>
      <Cities/>
      </ApolloProvider>);
  }
}

export default AppIndex