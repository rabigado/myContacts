// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
class App extends React.Component {
  render() {
    return (
      this.props.locale?<div className="container-fluid">
        <Header
          loading={this.props.loading}
          navbar={this.props.navbar}
          auth = {this.props.auth}
          locale ={this.props.locale}
        />
        {this.props.children}
      </div>: <div className="centerOfScreen"><Spinner name="ball-spin-fade-loader" color="red"/></div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  navbar: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  locale:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    locale:state.language
  };
}

export default connect(mapStateToProps)(App);
