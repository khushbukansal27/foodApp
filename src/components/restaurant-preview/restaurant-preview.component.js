import React from 'react';
import { connect } from 'react-redux';
import { addFavoriteTerm, removeFavoriteTerm } from '../../actions';
import RestaurantCollection from '../restaurant-collection/resturant-collection.component.js'

const mapStateToProps = state => {
    return {
        terms: state.terms,
        favorites: state.favorites
    };
};


class RestaurantPreview extends React.Component {

  
    render() {
        const count=this.props.terms.length;      
        const restList=[];       
        var k=0;
        for (var i = 0; i <count; i++) {
            k=k+1;   
        var subRestList=[];     
             for(var j=0;j<3;j++){                         
                subRestList.push(this.props.terms[i]);
                i=i+1;      
            }
            const obj = {
                id: "RC_"+k,
                item: subRestList
              };
            restList.push(obj);
           
        }       
        // if (this.state.showFavorites) {

            return (
                        <div className="restaurant-page"style={{padding:'7px'}}>
                                { 
                                    restList.map(({id,...item}) => ( 
                                     <RestaurantCollection key={id} {...item}> </RestaurantCollection>                                   
                                    )
        )}     
        </div>
       )
    }
}
export default connect(mapStateToProps, null)(RestaurantPreview);