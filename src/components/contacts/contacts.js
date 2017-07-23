import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import DynamicTable from '../common/DynamicTable';
import _ from 'lodash';
import {cellTypeEnum} from '../common/constants';
import EditContactModal from './editContact';
import {ModalManager,Effect} from 'react-dynamic-modal';
import RoundButton from '../common/roundButton';

class Contacts extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onsubmitHandler = this.onsubmitHandler.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.renderTableData = this.renderTableData.bind(this);
        this.openCreateEditModal = this.openCreateEditModal.bind(this);
    }

    handleBtnClick(e){
        this.openCreateEditModal(Object.assign({},this.props.contacts.Contacts[_.findIndex(this.props.contacts.Contacts,{id:e})]));
    }

    openCreateEditModal(Contact){
        ModalManager.open(<EditContactModal 
        
                onInputChange={this.handleChange} 
                language={this.props.language} 
                onsubmitHandler={this.onsubmitHandler}
                Contact={Contact} 
                onRequestClose={() => true}/>);
    }

    onsubmitHandler(item,hasChanged){
        if(hasChanged){
            this.props.updateSaveContact(item);
        }
    }
    renderTableData(data){
        
        const header = [{'id':1,1:{text:this.props.language.dictonary.strContactFullName,type:cellTypeEnum.HEADER},
            2:{text:  this.props.language.dictonary.strHomePhone  , type:cellTypeEnum.HEADER},
            3:{text:this.props.language.dictonary.strWorkPhone, type:cellTypeEnum.HEADER},
            4:{text:this.props.language.dictonary.strEmail, type:cellTypeEnum.HEADER},
            5:{text:this.props.language.dictonary.strEdit, type:cellTypeEnum.HEADER}}];
        const self = this;
            const formatedData = _.map(data,function(item){
            return{
                id:item.id,
                1:{text:item.firstName+' '+item.lastName, type:cellTypeEnum.TEXT},
                2:{text:item.HomePhonenumber, type:cellTypeEnum.TEXT},
                3:{text:item.WorkPhoneNumber, type:cellTypeEnum.TEXT},
                4:{text:item.Email, type:cellTypeEnum.TEXT},
                5:{text:self.props.language.dictonary.strEdit,id:item.id,type:cellTypeEnum.EDITBUTTON}
            };
        });
        return {header:header,formatedData:formatedData};
    }

    render(){
        let data= this.renderTableData(this.props.contacts.Contacts);
        return(
            <div>
                <DynamicTable searchable={true} pagination={true} data={data} listId={this.props.contacts.id} handleBtnClick={this.handleBtnClick}/>
                <hr/>
                <RoundButton handleClick={this.openCreateEditModal.bind(null,{})}/>
            </div>
        );
    }
}

Contacts.propTypes={
    contacts:PropTypes.object.isRequired,
    language:PropTypes.object.isRequired,
    updateSaveContact:PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    language: state.language,
    contacts: state.Contacts
  };
}


export default connect(mapStateToProps)(Contacts);