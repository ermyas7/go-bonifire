import React, {Component} from 'react'
import Header from './components/layout/Header/Header'
import WomenCloth from './Pages/WomenCloth'

import {BrowserRouter as Router, Route} from 'react-router-dom'
class  App extends Component{
  render(){
    return (
      <Router>
          <div className="App">
            <Header/>
            <Route path={`${process.env.PUBLIC_URL}/`} 
            render ={() => <WomenCloth/>}/>
          </div>
      </Router>
    );
  }
}

export default App
