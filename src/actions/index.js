import { ADD_FETCHED_DATA, ADD_FAVORITE_TERM, REMOVE_FAVORITE_TERM } from './types.js';
import axios from 'axios';

const apiUrl = 'https://foodbukka.herokuapp.com/api/v1/restaurant';

export const addFavoriteTerm =  (data) => {
    return {
      type: ADD_FAVORITE_TERM,
      payload: {
        businessname: data.businessname,
        location: data.location,
        image: data.image
      }
    }
};

export const removeFavoriteTerm = businessname => {
    return {
      type: REMOVE_FAVORITE_TERM,
      payload: {
        businessname
      }
    }
}

export const fetchData = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data["Result"]
            })
            .then(data => {
                console.log(data);
                dispatch({
                    type: ADD_FETCHED_DATA,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};
