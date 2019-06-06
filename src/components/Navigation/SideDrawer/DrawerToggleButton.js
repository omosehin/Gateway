import React from 'react'
import './DrawerToggleButton.css'

const ToggleButton =({click})=>{
// let rotateClasses = rotate ? toggle-button
    return(
        <button className = 'toggle-button' onClick = {click}>
            <div className = 'toggle-button__line'></div>
            <div className = 'toggle-button__line'></div>
            <div className = 'toggle-button__line'></div>
        </button>      
    );
}

export default ToggleButton;