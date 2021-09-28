import React, { Component } from 'react';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Main />
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