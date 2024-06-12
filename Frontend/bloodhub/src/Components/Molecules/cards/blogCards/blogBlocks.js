import React from 'react'
import "./blogBlocks.css";

export default function BlogBlocks({img,title,date}) {
  return (
    <div className='blogBlock m-2'>
        <div className="blogImg d-flex align-items-center justify-content-center overflow-hidden ">
            <img src={img} alt="" style={{width:"100%"}}/>
        </div>
        <div className="blogTitle px-2">
            <p>{title}</p>
        </div>
        <div className="blogDate">
            <small>{date}</small>
        </div>
    </div>
  )
}
