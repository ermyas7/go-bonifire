import React, {Component} from 'react'
import Header from './components/layout/Header/Header'
import WomenCloth from './Pages/WomenCloth'
import Cart from './Pages/CartPage'
import Popup from './components/Popup'
import {BrowserRouter as Router, Route} from 'react-router-dom'
class  App extends Component{
  state = {
    products: []
  }

  addToCheckOut = (product) => {
    let products = [...this.state.products, product]
    this.setState({products})
  }
  render(){
    let cartCount = this.state.products.length
    return (
      <Router>
          <div className="App">
            <Popup/> 
            <Header cartCount={cartCount}/>
            <Route exact path={`${process.env.PUBLIC_URL}/`} 
            render ={() => <WomenCloth 
            addToCheckOut={this.addToCheckOut}/>}/>
            <Route path={`${process.env.PUBLIC_URL}/cart`} 
            render ={() => <Cart
            items={this.state.products}/>}/>
          </div>
      </Router>
    );
  }
}

export default App
