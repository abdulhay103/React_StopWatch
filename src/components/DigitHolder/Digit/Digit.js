import React from 'react';
import './Digit.css'

const Digit = props => {
    return (
        <div className="digit text-center m-2" style={{borderColor: props.color}}>
            <h1 className="py-4 display-3" style={{color: props.color}}>
                {props.value < 10 ? `0${props.value}` : props.value}
            </h1>
        </div>
    )
}

export default Digit
