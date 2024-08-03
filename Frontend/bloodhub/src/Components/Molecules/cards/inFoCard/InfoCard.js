import React from 'react'
import "./InfoCard.css"
function InfoCard({className,fa_icon_class,title,value,style}) {
  return (
    <div className={`info-card py-3 py-sm-2 px-2 px-lg-5 mx-sm-1 ${className}`} style={style}>
        <div className='info-card-logo'>
            <i className={fa_icon_class}></i>
        </div>
        <div className='info-card-title lead'>
            <h4>{title}</h4>
        </div>
        <div className='info-card-title'>
            <span className='info-card-value text-success'>{value}</span>
        </div>
    </div>
  )
}

export default InfoCard