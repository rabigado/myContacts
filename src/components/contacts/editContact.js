import React,{Component,PropTypes} from 'react';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import TextInput from '../common/TextInput';

class EditContactModal extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            Contact:props.Contact,
            errors:{},
            isDirty:false,
            valid:false
        };
        this.InputChange = this.InputChange.bind(this);
        this.validate=this.validate.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    InputChange(event){
        const field = event.target.name;
        let contact = {};
        contact[field] = event.target.value;
        this.setState({isDirty:true, Contact:Object.assign({},this.state.Contact,contact)},()=>this.validate());
        
    }
    validate(){
        let errors={};
        let valid=true;
        if(this.state.Contact.Email && this.state.Contact.Email.length && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.Contact.Email)){
            errors.Email='please enter valid email';
            valid=false;
        }else{
            errors.Email=null;
        }
        if(this.state.Contact.WorkPhoneNumber && !/^[0-9()-]+$/.test(this.state.Contact.WorkPhoneNumber)){
            errors.WorkPhone='please enter valid phone number';
            valid=false;
        }else{
            errors.WorkPhone=null;
        }
        if(this.state.Contact.HomePhonenumber && !/^[0-9()-]+$/.test(this.state.Contact.HomePhonenumber)){
            errors.HomePhonenumber='please enter valid phone number';
            valid=false;
        }else{
            errors.HomePhonenumber=null;
        }
        this.setState({valid:valid,errors:errors});
    }
    handleSubmit(){
        if(this.state.valid)    
            this.props.onsubmitHandler(this.state.Contact,this.state.isDirty);
        ModalManager.close();
    }
    render(){
        const {onRequestClose,Contact,language} = this.props;
        return(
                <Modal style={{content:{width:'30%', overflow:'hide'}}}
                    onRequestClose={onRequestClose}
                    effect={Effect.FlipHorizontal3D}>
                     <div className="close-button">
                        <button type="button" className="close"  onClick={ModalManager.close} aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                     <div className="container-fluid ">
                    <TextInput
                        name="firstName"
                        label={language.dictonary.strFirstName}
                        value={this.state.Contact.firstName}
                        onChange={this.InputChange}
                        error={this.state.errors.firstName}/>
                    <TextInput
                        name="lastName"
                        label={language.dictonary.strLastName}
                        value={this.state.Contact.lastName}
                        onChange={this.InputChange}
                        error={this.state.errors.lastName}/>
                    <TextInput
                        name="Email"
                        label={language.dictonary.strEmail}
                        value={this.state.Contact.Email}
                        onChange={this.InputChange}
                        error={this.state.errors.Email}/>
                    <TextInput
                        name="HomePhonenumber"
                        label={language.dictonary.strHomePhone}
                        value={this.state.Contact.HomePhonenumber}
                        onChange={this.InputChange}
                        error={this.state.errors.HomePhonenumber}/>
                    <TextInput
                        name="WorkPhoneNumber"
                        label={language.dictonary.strWorkPhone}
                        value={this.state.Contact.WorkPhone}
                        onChange={this.InputChange}
                        error={this.state.errors.WorkPhone}/>
                    
                    <br />
                        <button onClick={this.handleSubmit} className={this.state.valid?"btn btn-lg btn-primary":"btn btn-lg btn-primary disabled"} >{language.dictonary.strSubmit}</button>
                    </div>
                </Modal>
            );
        }
}


EditContactModal.propTypes = {
    Contact:PropTypes.object,
    onRequestClose:PropTypes.func.isRequired,
    language:PropTypes.object.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onsubmitHandler:PropTypes.func.isRequired
};

export default EditContactModal;