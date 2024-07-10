import React from 'react'
import './ValueCard.css';
import { DownArrow } from '../../../IconUtils';

const ValueCard = ({data }) => {
   
  return (
    <div className='valueCard-mainContainer'>
      <div className='valuecard-upper'>
        <div>{data.icon()}</div>
        {data?.isWeekDropDown && <div className='thisweek-container'>This Week {DownArrow({color:'#BEC0CA',width:'17px',height:'16px'})}</div>}
      </div>
      <div className='valueCard-lower'>
        {data?.reading?.map((e,i) => 
            <div key={i} className='valueCard-subContainer'>
                <div className={`valueCardGray ${e?.title === "Abandned Cart" ? "Abandned-cart":""}`}>{e?.title}</div>
                <div>{e?.value} <span className='valueCardGray valueCard-lower-per'>{e?.perct}</span></div>
            </div>
        )}
      </div>
    </div>
  )
}

export default ValueCard;
