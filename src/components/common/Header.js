import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as languageActions from '../../actions/languageActions';
import $ from 'jquery';
import _ from 'lodash';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.changeLocale= this.changeLocale.bind(this);
  }

  changeLocale(locale){
    this.props.actions.switchLanguage(locale);
  }

  render(){
    const {locale} = this.props;

    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavBrand linkTo={'/'} text={locale.dictonary.strWelcome} /> 
          </div>
          <div className="navbar navbar-right">
                <span className="text-white" onClick={this.changeLocale.bind(this,'en')}>{"EN"}</span>{"|"}<span className="text-white" onClick={this.changeLocale.bind(this,'he')}>{"עב"}</span>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            
        
          </div>

        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  locale: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  let current_local = state.locale && state.locale.lang;

  return {
    current_local: current_local
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},languageActions), dispatch)
  };
}


const NavBrand = ({linkTo,text}) => {  
    return (     
      <Link to={linkTo} className="navbar-brand"  activeClassName="active">{text}</Link>
      //<a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
    ); 
};
NavBrand.propTypes = {
      linkTo: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);