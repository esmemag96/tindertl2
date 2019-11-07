import { LIKE, DISLIKE, GETANOTHER, FETCHDATA } from './actionTypes';
import { personsAPI } from '../util';
import axios from 'axios';


export default {
    like: () => {
        return {
            type: LIKE
        }
    },
    dislike: () => {
        return {
            type: DISLIKE
        }
    },
    getAnother: () => {
        return {
            type: GETANOTHER
        }
    },
    fetchAll: () =>  dispatch => {
        return axios
            .get(personsAPI)
            .then(res => {
                let {
                    persons
                } = res.data;
                return dispatch({
                    type: FETCHDATA,
                    payload: persons
                });
            })
            .catch(err => {
                console.log('Could not fetch products. Try again later.');
            });
    }
}