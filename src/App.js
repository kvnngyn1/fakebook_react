import React, { Component } from 'react';
import Main from './components/Main';

// YOU DON'T "ADD" OR "REMOVE" ANYTHING FROM DOM.
// YOU ONLY REPLACE THE ENTIRE DOM.

class App extends Component {


  render() {
    const posts = [
      {
        "id": 1,
        "body": "This is the first post",
        "dateCreated": 9,
        "user": {
          "id": 1,
          "firstName": "Lucas",
          "lastName": "Lang",
          "email": "lucasl@codingtemple.com"
        }
      },
      {
        "id": 2,
        "body": "This is the second post",
        "dateCreated": 56,
        "user": {
          "id": 1,
          "firstName": "Lucas",
          "lastName": "Lang",
          "email": "lucasl@codingtemple.com"
        }
      },
      {
        "id": 3,
        "body": "This is the third post",
        "dateCreated": 3,
        "user": {
          "id": 2,
          "firstName": "Derek",
          "lastName": "Hawkins",
          "email": "derekh@codingtemple.com"
        }
      }
    ];

    return (
      <React.Fragment>
        <Main posts={posts} />
      </React.Fragment>

      // sending data from attribute in each component 
      // <div>
      //   <Main info={ 'a' } />
      //   <Main info={ 'b' } />
      //   <Main info={ 'c' } />
      //   <Main info={ 'd' } />
      //   <Main info={ 'e' } />
      // </div>
    )
  }
}

export default App;