import React, {useState}from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Backdrop from '../Navigation/Backdrop/Backdrop'

const Navbar = () =>{
    // const [sideDrawerOpen, DrawerOpen] = useState('false')

    // const drawerToggleClickedHandler = () =>{
    //     DrawerOpen(sideDrawerOpen ==='true' ?'false':'true')
    // }

    // const toggleBackdropHandler = () => {
    //     DrawerOpen(false)        
    // }

    return(
        <div style={{height:'100%'}}>       
        {/* <Toolbar/> */}
        {/* <SideDrawer show = {sideDrawerOpen} onClick ={toggleBackdropHandler}/>
        {sideDrawerOpen && <Backdrop clickedBackdrop = {toggleBackdropHandler}/>}*/}
       
        </div> 
    );
}
export default Navbar;