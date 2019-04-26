import React, {Component} from 'react'
import Header from './components/layout/Header/Header'
import WomenCloth from './Pages/WomenCloth'
import Cart from './Pages/CartPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
class  App extends Component{
  render(){
    return (
      <Router>
          <div className="App">
            <Header/>
            <Route path={`${process.env.PUBLIC_URL}/`} 
            render ={() => <Cart/>}/>
          </div>
      </Router>
    );
  }
}

export default App
