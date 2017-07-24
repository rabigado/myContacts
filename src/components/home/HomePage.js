import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Spinner from 'react-spinkit';
import * as ContactsActions from '../../actions/ContactsActions';
import {bindActionCreators} from 'redux';
import Contacts from '../contacts/contacts';
import Loading from '../common/loading';
import toastr from 'toastr';
class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateSaveContact=this.updateSaveContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

    componentWillMount(){
      this.props.actions.loadContacts();
  } 
  
  updateSaveContact(contact){
    this.props.actions.updateContacts(contact).then((r)=>{
                if(r.success){
                    toastr.success('Contact list updated');
                }else{
                    toastr.error('Somthing went wrong');
                }
            });
  }
  
  deleteContact(contact){
    this.props.actions.deleteContact(contact).then((result)=>{
      if(result.success){
        toastr.success('record deleted');
      }else{
        toastr.error('Somthing went wrong');
      }
    });
  }
  //language is an item containg keys for the static web display to be shown at a selected language explore more on LanguageApi.js
  render() {
    const {language,contacts} = this.props;

    return (
      <div>
        <div className="jumbotron text-center">
          <h2 className="text-primary">
            <b>
              {language.dictonary.strContactlist}
            </b>
          </h2>
          <p className="text-success">{language.dictonary.strHomeSubHeader}</p>
          <br/>
        </div>
        <div className="container">
            {contacts.loading?<Loading />:<Contacts  deleteRecord={this.deleteContact} updateSaveContact={this.updateSaveContact} language={language} contacts={contacts.Contacts}/>}
        </div>  
      </div>
    );
  }
}

HomePage.propTypes={
  contacts:PropTypes.object.isRequired,
  actions:PropTypes.object.isRequired,
  language: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    language: state.language,
    contacts: state.Contacts
  };
}



function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ContactsActions, dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
