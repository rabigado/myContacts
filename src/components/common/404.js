import React,{Link} from 'react';
import { hashHistory } from 'react-router';
let img =require('../../resources/img/travolta.gif');


const NotFound = () =>
  <div className="container-fluid text-center">
    <h1>404 page not found</h1>
    <p>We are sorry but the page you are looking for does not exist.</p>
    <img src={img} />
    <br />
    <br />
    <div className="btn btn-primary btn-lg" onClick={()=>hashHistory.goBack()}>Go BACK</div> 
  </div>;

export default NotFound;