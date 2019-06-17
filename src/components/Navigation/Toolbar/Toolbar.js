import React,{Component} from 'react';

import './Toolbar.css'
import { NavLink } from 'react-router-dom'
import ToggleButton from '../SideDrawer/DrawerToggleButton'
import CancelButton from '../SideDrawer/CloseToggleButton'
import Register from '../../../Assets/external-link-symbol.svg'
import Sign_In from '../../../Assets/sign-in.svg'
import Avatar from '../../../Assets/avatar.svg'
const activeStyle = {
        fontWeight:'bolder',
        color:'black',
        borderBottom:'4px solid white',
        padding:'10px',
        transition: 'all ease 0.5s',
        background:'white'
}
const HomeStyle = {
    fontWeight:'bolder',
    color:'black',
    borderBottom:'4px solid white',
    padding:'10px',
    transition: 'all ease 0.5s',
    background:'white'
}

// class Toolbar extends Component{


//     render(){
//         return()
//     }
// };


// export default Toolbar;