import React from 'react';
import './dashBoard.css'
import ValueCard from '../../components/common/valueCard/ValueCard';
import { ValueCardIcon1, ValueCardIcon2, ValueCardIcon3, SidebarInventoryIcon, ValueCardIcon5, DownArrow } from '../../IconUtils';
import DonutChart from '../../components/common/donutChart/DonutChart';
import BarChart from '../../components/common/barChart/BarChart';
import { IphoneOrders, valueCardList } from './data';

const DashBoard = () => {

  const valueCardList ={
    card1: {
      icon:ValueCardIcon1, 
      isWeekDropDown:true, 
      reading:[
        {title:'Sales',value:'#4,000,000.00', perct:''},
        {title:'Volume',value:'450', perct:'+20.00%'}
      ]
    },
    card2: {
      icon:ValueCardIcon2, 
      isWeekDropDown:true, 
      reading:[
        {title:'Customers',value:'1,250', perct:'+15.80%'},
        {title:'Active',value:'1,180', perct:'85%'}
      ]
    },
    card3: {
      icon:ValueCardIcon3, 
      isWeekDropDown:true, 
      reading:[
        {title:'All Orders',value:'450', perct:''},
        {title:'Pending',value:'5', perct:''},
        {title:'Completed',value:'445', perct:''},
      ]
    },
    card4: {
      icon:SidebarInventoryIcon, 
      isWeekDropDown:false, 
      reading:[
        {title:'All Products',value:'45', perct:''},
        {title:'Active',value:'32', perct:'+24%'}
      ]
    },
    card5: {
      icon:ValueCardIcon5, 
      isWeekDropDown:true, 
      reading:[
        {title:'Abandned Cart',value:'20%', perct:'+0.00%'},
        {title:'Customers',value:'30', perct:''}
      ]
    },
};

  return (
    <div className='dashboard-mainContainer'>
        <div className='all-card all-card1'>
          <ValueCard data={valueCardList.card1}/>
        </div>
        <div className='all-card all-card2'>
          <ValueCard data={valueCardList.card2}/>
        </div>
        <div className='all-card all-card3'>
          <ValueCard data={valueCardList.card3}/>
        </div>
        <div className='all-card all-card4'>
           <div className='maketingTitle'>Maketing <div className='thisweek-container'>This Week {DownArrow({color:'#BEC0CA',width:'17px',height:'16px'})}</div></div>
          <DonutChart/>
        </div>
        <div className='all-card all-card5'>
           <ValueCard data={valueCardList.card4}/>
        </div>
        <div className='all-card all-card6'>
          Recent oreder

          <div className='recentOrder-listContainer'>
            {IphoneOrders?.map((e,i) => <div className='recentOrder-list'>
              <img src={e.img} alt='icon'/>
              <div className='recentOrder-list-deatails'>
                <div className='recentOrder-deatails deatails1'>{e?.model} <span className='deatailsDate'>{e?.date}</span></div>
                <div className='recentOrder-deatails deatails2'>{e?.price} <span className={e?.status === "Completed" ? "deatailsStatusComplete":"deatailsStatusPending"}>{e?.status}</span></div>
              </div>
            </div>)}
          </div>

        </div>
        <div className='all-card all-card7'>
          <ValueCard data={valueCardList.card5}/>
        </div>
        <div className='all-card all-card8'>
          summary
          <BarChart/>
        </div>
    </div>
  )
}

export default DashBoard;
