import * as types from './actionTypes';
import contactsApi from '../api/mockContactsApi';


function LoadContactsRequest(){
    return {type:types.LOAD_CONTACTS_REQUEST};
}

function LoadContactsSuccess(contacts,id){
    return {type:types.LOAD_CONTACTS_SUCCESS,contacts,id};
}

function LoadContactsError(contacts){
    return {type:types.LOAD_CONTACTS_ERROR};
}

function CreateContactsSuccess(contact,id){
    return {type:types.CREATE_CONTACT_SUCCESS,contact,id};
}

function UpdateContactsSuccess(contact,id){
        return {type:types.UPDATE_CONTACT_SUCCESS,contact,id};        
}
function UpdateContactsError(){
    return {type:types.UPDATE_CONTACT_ERROR};
}
export function loadContacts(){
    return function(dispatch) {
    dispatch(LoadContactsRequest());
    return contactsApi.getAllContacts().then(contacts => {
      dispatch(LoadContactsSuccess(contacts,Math.random()));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateContacts(contact){
    return function(dispatch) {
        return contactsApi.saveContact(contact).then(contactRes=>{
            if(contact.id)
                dispatch(UpdateContactsSuccess(contactRes,Math.random()));
            else
                dispatch(CreateContactsSuccess(contactRes,Math.random()));
        }).catch(error => {
            throw(error);
        });
    };
}