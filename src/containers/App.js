import React, { Component } from 'react';
 import Menu from '../components/Menu/Menu';
import { BrowserRouter as Router ,Route} from "react-router-dom";
import Basket from '../components/Order/Basket'

class App extends Component {
 
  render() {
     return (
      <Router>
            <div>
            <Menu/>
            <Route  path="/" component={Basket} />
                      
            </div>
      </Router>
    );
  }
}
 
export default App;
