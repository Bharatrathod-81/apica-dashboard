import React from 'react';
import './Layout.css';
import AllRoutes from '../routes/routes';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';


const Layout = ({clickOutside, setClickOutside}) => {
  return (
        <div className='layout-mainContainer'>

            <div className='grid-sidebar'>
                <SideBar clickOutside={clickOutside} setClickOutside={setClickOutside}/>
            </div>

            <div className='grid-nav-container'>

                <Navbar/>

            </div>

            <div className='Allpages'>
                <AllRoutes/>
            </div>
                
            
        </div>
  )
}

export default Layout;