// const RestaurantPreviewItem=(props)=>{
//    const text =props.text

// return (
  
//     <div style={{ width: '150px' }}>
//       <img src={props.image} style={{ width: '150px' }} alt={props.businessname}/>     
//     <div>
//       <span>{props.businessname}</span>
//       <span className="mb-2 text-muted">{props.location}<br/>
//       {props.address}</span>      
//     </div>
//     </div>
  
//     )
// }

import React from 'react';

const RestaurantPreviewItem=(props)=>{
return(   
      <div className="restaurant-preview-item" style={{border:'solid',padding:'12px',
      float:'left',margin:'12px',width:'250px',height:'250px'}}> 
      <img src={props.image} style={{ width: '150px' }} alt={props.businessname}/>   
        <br/>
      <span><b>{props.businessname}</b></span>   <br/>
        <span className="mb-2 text-muted">{props.location}<br/>
        {props.address}</span>     
      </div>    
)}

export default RestaurantPreviewItem;