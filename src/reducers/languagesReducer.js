import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function LanguageReducer(state = initialState.language, action){
    switch (action.type) {
        case types.LOAD_LANGUAGE_SUCCESS:
             return action.language;
        
        default:
            return state;
    }
}