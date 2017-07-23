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
    return fetch('/api/AllContacts',{method:'GET'}).then(response =>
          response.json().then(
            contacts => ({ contacts, response }))
              ).then(({ contacts, response }) =>  {
                if(response.status===200){
                    dispatch(LoadContactsSuccess(contacts.data,Math.random()));
                }else{
                    dispatch(LoadContactsError(response.status.toString()));//does nothing at the moment
                }
          });
    };
}

export function updateContacts(contact){
    return function(dispatch) {
        const config = {
            method: 'POST',
            headers: { 'Content-Type':'application/x-www-form-urlencoded'},
            body:`contact=${JSON.stringify(contact)}`
        };
        return fetch('/api/updateContact',config).then(response =>
          response.json().then(
            contacts => ({ contacts, response }))
              ).then(({ contacts, response }) =>  {
                if(response.status===200){
                    if(contact.id){
                        dispatch(UpdateContactsSuccess(contact,Math.random()));    
                    }else{
                        contact.id = contacts[0].NewId;
                        dispatch(CreateContactsSuccess(contact,Math.random()));
                    }
                    return Promise.resolve({success:true});
                }else{
                    dispatch(UpdateContactsError(response.status.toString()));//does nothing at the moment
                    return Promise.resolve({success:false});
                }
          });
          
    };
}