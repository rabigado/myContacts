import {combineReducers} from 'redux';
import language from './languagesReducer';
import Contacts from './ContactReducer';


const rootReducer = combineReducers({
  Contacts,
  language
});

export default rootReducer;
