import React from 'react';
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

const Toolbar =({drawerClickedHandler,show})=>{
        return(<header className="toolbar">
            <nav className="toolbar__navigation">
            
                <div className="toolbar__logo">
                 <NavLink 
                    activeStyle= {HomeStyle}
                    to="/">Simplify
                 </NavLink>
                </div>
                <div className="spacer"/>
                <div className="toolbar_navigation-items">
                 <ul>
                     <div className ='d-flex'>
                         
                         <img src = {Avatar} width={20} height={20} alt ='user'/>
                     <li>
                            <NavLink 
                                to = "/Users"
                                activeStyle= {activeStyle}
                                
                                >Users</NavLink>
                       </li>
                     </div>
                    
                    <div className= 'd-flex'>
                    <img src = {Register} width={20} height={20} alt ='user'/>

                    <li>
                        
                            <NavLink 
                                to = "/Sign_Up"
                                activeStyle= {activeStyle}
                                >Sign Up</NavLink>
                        </li>
                    </div>
                    
                    <div className= 'd-flex'>
                    <img src = {Sign_In} width={20} height={20} alt ='user'/>
                    <li>
                            <NavLink 
                                to = "/Sign_In"
                                activeStyle= {activeStyle}
                                >Sign In</NavLink>
                        </li>
                    </div>
                        
                    </ul>
                </div>
                <div className="toolbar__toggle-button"> 
                   {show ? <CancelButton/>:<ToggleButton click ={drawerClickedHandler}/>}
                </div>
            </nav>  
        </header>)
};


export default Toolbar;