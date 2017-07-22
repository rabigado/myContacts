import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ContactReducer(state = initialState.Contacts, action) {
  switch (action.type) {
    case types.LOAD_CONTACTS_REQUEST:
      return Object.assign({}, state, {loading:true});
    case types.LOAD_CONTACTS_SUCCESS:
      return Object.assign({}, state, {loading:false,Contacts:action.contacts,id:action.id});
    case types.UPDATE_CONTACT_SUCCESS:
        return Object.assign({},state,{id:action.id,Contacts:state.Contacts.map((item,index)=>{
          if(item.id === action.contact.id){
            return Object.assign({},item,action.contact);
          }
          return item;
        })});
      case types.CREATE_CONTACT_SUCCESS:
        return Object.assign({},state,{id:action.id,Contacts:[...state.Contacts,action.contact].sort((a,b)=>{a.firstName.toLowerCase() < b.firstName.toLowerCase()?-1:1;})});

    default:
      return state;
  }
}
