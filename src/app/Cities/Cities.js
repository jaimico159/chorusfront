import React, {Component} from 'react';
import {Table} from 'bootstrap-4-react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const cities = gql`
      {
        cities {
          name
        }
      }
    `;

class Cities extends Component {
  render(){
    return(
    <Query query={cities} >
      {({loading, error, data}) => {
          if(loading) return <p>Loading...</p>;
          if(error) return <p>Error</p>;
          console.log(data);
          if(data.length === 0){
            return <p>There are no results, try another user ...</p>
          }
          else{
            return <p>Sí había</p>;
          }
        }
      }
    </Query>);
  }
}

export default Cities