import React, {Component} from 'react'
import Header from './components/layout/Header/Header'
import Main from './components/Main'

import {BrowserRouter as Router, Route} from 'react-router-dom'
class  App extends Component{
  render(){
    return (
      <Router>
          <div className="App">
            <Header/>
            <Route path={`${process.env.PUBLIC_URL}/`} 
            render ={() => <Main/>}/>
          </div>
      </Router>
    );
  }
}

export default App
