
import {LIKE, DISLIKE, GETANOTHER, FETCHDATA} from './actionTypes';


function initialState(){
    const state={persons:[], current:{
        nombre: "Jaz Juchitepec",
        photo: "data:image/jpeg;base64,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",
        bio: "Soy bien chida"
    }};

    return state;
}


export default function showPhotoReducer(state = initialState(), action){
    switch (action.type){
        case LIKE:
            return {
                ...state,
            };
        case DISLIKE:
            return {
                ...state,
            };
        case GETANOTHER:
            state.current = Object.assign({}, state.persons[0]);
            delete state.persons[0];
            return Object.assign({}, state);
        case FETCHDATA:
            return {
                ...state,
                persons: action.payload
            };
        default:
            return state;
    }
}