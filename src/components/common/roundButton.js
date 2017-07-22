import React,{PropTypes} from 'react';

const RoundButton =({handleClick})=>{
    return ( <div className="round-button" data-toggle="tooltip" data-placement="bottom" title="Add New Contact"><div onClick={handleClick} className="round-button-circle"><span 
                className="round-button">+</span></div>
            </div> );
};

RoundButton.propType={
    handleClick:PropTypes.func.isRequired
};

export default RoundButton;