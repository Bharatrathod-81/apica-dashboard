import React from 'react'
import './MainButton.css'

const MainButton = ({leftIcon, title, rightIcon, onClick, key, styles, count, isActive}) => {

  return (
    <div key={key || 1} onClick={onClick} style={{...styles}} className={`mainBtn-container ${isActive ? "active-mainBtn":""}`} >
        {leftIcon?.icon && leftIcon?.icon({...leftIcon?.style, color: leftIcon?.style?.color || styles?.color})}
        {title && title}
        {rightIcon?.icon && rightIcon?.icon({...rightIcon?.style, color: rightIcon?.style?.color || styles?.color})}
        {count > 0 && <div className='count-container'>{count}</div>}
    </div>
  )
}

export default MainButton;
