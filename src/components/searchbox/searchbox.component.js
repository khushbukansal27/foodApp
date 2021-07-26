import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        terms: state.terms
    };
};
  
class SearchBox extends React.Component {
        
        render() {
            const count=this.props.terms.length;   
            const searchRestaurant=[];  
            const getDataagain=()=>{
                for (var i = 0; i < count; i++) {                
                    searchRestaurant.push(this.props.terms[i].businessname)
               }   
            }
           
        return (
                <div >

                <Autocomplete
                    style={{ width: 300 , height:50}}
                    freeSolo
                    autoComplete
                    autoHighlight
                    options={searchRestaurant}
                    renderInput={(params) => (
                    <TextField {...params}
                        onChange={getDataagain}
                        variant="outlined"
                        label="Search Box"
                    />
                    )}
                />
                </div>
                );
        }
}
export default connect(mapStateToProps, null)(SearchBox);