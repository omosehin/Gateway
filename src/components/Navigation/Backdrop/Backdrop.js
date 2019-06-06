import React from 'react';
import './Backdrop.css';
const Backdrop = ({clickedBackdrop}) =>(
    <div className = "backdrop" onClick = {clickedBackdrop}/>
);
export default Backdrop