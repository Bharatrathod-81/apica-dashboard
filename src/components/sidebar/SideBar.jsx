import React, { useEffect, useState } from 'react';
import './SideBar.css'
import {SidebarContactSupportIcon,  MainIcon, SidebarBagIcon, SidebarConversationIcon, SidebarCustomerIcon, 
    SidebarDashboardIcon, SidebarInventoryIcon, SidebarSettingIcon,SideAccountUpdateIcon,SideLogoutIcon,DownArrow} from '../../IconUtils';
import MainButton from '../common/main-button/MainButton';
import {useLocation, useNavigate } from 'react-router-dom';


const SideBar = ({clickOutside, setClickOutside}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [openSidebar, setOpenSideBar] = useState(true);
    
    const btnStyleObj1 = {
        padding: '16px 20px 16px 20px',
        borderRadius: '12px',
        gap: '15px',
        display:'flex',
        justifyContent:'start',
        fontFamily:"'Inter', sans-serif",
        alignItems:'center',
        fontWeight: '400',
        fontSize: '14px',
    };
    
    const btnStyleObj2 = {
        padding: '16px 20px 16px 20px',
        gap: '15px',
        display:'flex',
        justifyContent:'start',
        borderRadius: '16px',
        alignItems:'center',
        fontFamily: "'Inter', sans-serif",
        fontSize: "14px",
        fontWeight: "400",
        textAlign: "left",
        color:"#1C1D22",
        backgroundColor: "#5E63661A",
    };

    const allItemsList = [
        {title:"Dashboard", count:0, leftIcon:SidebarDashboardIcon},
        {title:"Orders", count:3, leftIcon:SidebarBagIcon},
        {title:"Customers", count:0, leftIcon:SidebarCustomerIcon},
        {title:"Inventory",count:0, leftIcon:SidebarInventoryIcon},
        {title:"Conversations",count:16, leftIcon:SidebarConversationIcon},
        {title:"Settings", count:0, leftIcon:SidebarSettingIcon}
    ];

    const navigateHandler = (path) => {
        navigate(`/${path === 'Dashboard' ? "":path}`);
    };

    useEffect(() => {
        setOpenSideBar(false)
    },[clickOutside]);

    useEffect(() => {
        setOpenSideBar(true)
    },[]);

  return (
    <div className='sidebar-mainContainer'>

        <div className={openSidebar ? 'inner-container':'collase-inner-container'} onClick={e => {e.stopPropagation();setOpenSideBar(true)}}>

            <div className={openSidebar ? 'sidebar-container':'collase-sidebar-container'}>

                <div className='main-iconContainer'>
                    <div className='main-iconn'>{MainIcon()}</div>
                    {openSidebar && <div className='icon-title'>Metrix</div>}
                </div>

                <div className='menu-itemsContainer'>

                    <div className='allItemList'>
                        {allItemsList.map((e,i) => 
                            <MainButton 
                                key={i} 
                                count={openSidebar ? e.count:0} 
                                title={openSidebar ? e?.title:''} 
                                styles={btnStyleObj1} 
                                leftIcon={{icon:e?.leftIcon}} 
                                onClick={() => navigateHandler(e.title)} 
                                isActive={location.pathname === `/${e.title === 'Dashboard' ? "":e.title}`}
                            />
                        )}
                    </div>

                    <div>

                       <MainButton
                            title={openSidebar ? "Contact Support":""} 
                            styles={btnStyleObj2} 
                            leftIcon={{icon:SidebarContactSupportIcon}} 
                            onClick={() => {}}
                        />

                        <div className='accountUpdate'>
                            <div className='accountUpdateUpper'>{SideAccountUpdateIcon()}<p className='AccountUpdateTitle'>{openSidebar ? "Free Gift Awaits You!":""}</p></div>
                            <div className='accountUpdateLower'>{openSidebar ? "Upgrade your account":""}{openSidebar && <div className='rightArrow'>{DownArrow({color:'#1C1D22',width:'17px',height:'17px'})}</div>}</div>
                        </div>

                        <div className='logout-container'>
                            <div>{SideLogoutIcon()}</div>
                            {openSidebar && <div className='logout-text'>Logout</div>}
                        </div>

                    </div>
                    
                </div>

            </div>
        </div>

    </div>
  )
}

export default SideBar;
