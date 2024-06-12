import React from 'react'

export default function LabelledImgCard({labelClass,img,labelStyle,label,imgStyle,imgClass}) {
  return (
    <div className='imgCard d-flex flex-column align-items-center justify-content-center '>
        <div className='imgContainer '>
            <img src={img} className={imgClass} style={imgStyle} alt="" />
        </div>
        <div className='imgLabel mt-2'>
            <h5 style={labelStyle} className={labelClass} >{label}</h5>
        </div>
    </div>
    
  )
}
