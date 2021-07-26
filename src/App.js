import React from 'react';
//import RestaurantPreview from '../src/components/restaurant-preview/restaurant-preview.component.js'
import Header from '../src/components/header/header.component.js'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import RestaurantPreview from '../src/components/restaurant-preview/restaurant-preview.component.js'
import HomePage from '../src/components/homepage/homepage.component.js';

function App() {
  return (
    <div>
      <Header />
      <div className="App" style={{}}>      
      <Router> 
        <Switch>  
        <Route exact path='/' component={HomePage}/>                           
                <Route path='/restaurants' component={RestaurantPreview}/>
                </Switch> 
            </Router>
            </div>
    </div>
  );
}

export default App;
