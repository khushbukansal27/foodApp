import React from 'react';
import SearchBox from '../searchbox/searchbox.component.js'
import food from '../../food.jpg';

function HomePage(){
    return(<div>
        <table><tr><td>
        <img src={food} style={{ width: '700px' }} /> 
          </td>
          <td>
          <div style={{float: 'left', margin: '2px'}}>
               <SearchBox /> 
              </div>
            </td></tr></table>
      </div>);
}

export default HomePage;
