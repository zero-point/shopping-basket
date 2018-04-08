import React, { Component } from 'react';
 import Menu from '../components/Menu/Menu';
import { BrowserRouter as Router ,Route} from "react-router-dom";
import HomePage from  '../components/HomePage/HomePage'
import PricesHome from '../components/PricesNav/PricesHome'
import Basket from '../components/Order/Basket'
import Total from '../components/Total/Total'

class App extends Component {
 
  render() {
     return (
      <Router>
            <div>
            <Menu/>
            <Route  path="/basket" component={Basket} />
            </div>
      </Router>
    );
  }
}
 
export default App;
