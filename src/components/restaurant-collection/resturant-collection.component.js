import React from 'react';
import RestaurantPreviewItem from '../restaurant-preview-item/restaurant-preview-item.component.js';

const RestaurantCollection= (items)=>{
    const data=items.item;
      return(       
        <div className="restaurant-collection">             
                {     
                    data.filter((item)=>{ 
                        return item;
                    })                     
                    .map(({id,...otherPreviewItem}) => (  
                                         
                       <RestaurantPreviewItem key={id} {...otherPreviewItem} />  
                                            
                     ))
                    }               
        </div>
    );
}

export default RestaurantCollection;