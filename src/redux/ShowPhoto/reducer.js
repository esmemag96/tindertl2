
import {LIKE, DISLIKE, GETANOTHER, FETCHDATA} from './actionTypes';


function initialState(){
    const state={persons:[], current:{
        nombre: "Jaz Juchitepec",
        photo:'https://www.elsoldemexico.com.mx/doble-via/virales/ao08dk-yalitza-doble-3.png/ALTERNATES/LANDSCAPE_400/yalitza-doble-3.PNG',
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