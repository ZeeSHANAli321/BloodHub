import React from 'react'
import "./blogBlocks.css";
import { Link } from 'react-router-dom';

export default function BlogBlocks({data_aos,data_aos_delay,img,title,date,blogUrl}) {

  return (
    <div data-aos={data_aos} data-aos-delay={`${data_aos_delay}`} className='blogBlock m-2' onClick={()=>{window.scrollTo(0, 0)}}>
      <Link style={{textDecoration:"none",color:"inherit"}} to={`/blogs/${blogUrl}`}>
        <div className="blogImg d-flex align-items-center justify-content-center overflow-hidden ">
            <img src={img} alt="" style={{width:"100%"}}/>
        </div>
        <div className="blogTitle px-2">
            <p>{title}</p>
        </div>
        <div className="blogDate">
            <small>{date}</small>
        </div>
        </Link>
    </div>
  )
}
