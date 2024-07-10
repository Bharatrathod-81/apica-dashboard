import React from 'react'
import { BellIcon, DownArrow, HomeIcon } from '../../IconUtils';
import ProfileImg from '../../asset/profle.jpeg';
import './Navbar.css'
const Navbar = () => {


  return (


    <div className='nav-main-container'>

      <div className='topNav'>

        <div className='nav-content'>

            <div className='sub-heading'>
                Dashboard
            </div>

            <div className='profile-content'>

                <div className='icon'>
                    <div className='icon-text'>Nanny's Shop</div>
                    <div>{DownArrow({color:'#1C1D22',width:'15px',height:'15px'})}</div>
                </div>

                <div className='icon2'>

                    <div className='bell-icon'>{BellIcon()}</div>

                    <div>
                        <img src={ProfileImg} alt='profile' className='profile-img'/>
                    </div>

                </div>

            </div>

        </div>
         
      </div>


      <div className='breadcrumbs'>

        <div className='breadcrumbs-content'>
          {HomeIcon({color:'#1C1D22',width:'13px',height:'13px'})}
        </div>

      </div>
    </div>
  )
}

export default Navbar;
