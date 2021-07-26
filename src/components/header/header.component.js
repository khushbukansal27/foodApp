import React from 'react';
import food from '../../../src/food-logo.jpg';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import RestaurantPreview from '../restaurant-preview/restaurant-preview.component.js'

function Header(){
    return (
        <div className="header-section" style={{height:'80px'}}>
           <img
                src={food}
                className="header-logo"
                alt="logo" 
                style={{width:'70px',height:'70px',float:'left'}}          
              />
              
              <div className="header-right-section">
                <a href='/restaurants' style={{float:'right',margin:'10px'}}>Restaurants</a>          
               
              
            </div>
        </div>
    );
}

export default Header;

