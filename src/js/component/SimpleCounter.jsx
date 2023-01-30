import React from "react";
import PropTypes from "prop-types";

const SimpleCounter = (props) =>{
   return <div className="bigDiv">
    <div><i className="fas fa-clock"></i></div>
    <div>{Math.floor(props.number/100000 % 10)}</div>
    <div>{Math.floor(props.number/10000 % 10)}</div>
    <div>{Math.floor(props.number/1000 % 10)}</div>
    <div>{Math.floor(props.number/100 % 10)}</div>
    <div>{Math.floor(props.number/10 % 10)}</div>
    <div>{props.number % 10}</div>
   </div> 
}

SimpleCounter.propTypes = {
number: PropTypes.number
};

SimpleCounter.defaultProps = {
    number: 0
    };

export default SimpleCounter;