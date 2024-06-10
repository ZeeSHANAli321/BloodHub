import React from 'react'
import "../../Pages/HomePage/home.css"

export default function SectionT1({sectionHead,sectionDesc,sectionImgSrc,varColor,className,style}) {
    const sectionStyle = {
        backgroundColor: `var(${varColor})`,
        ...style
    };
  return (
    <section className={`sectionPadding py-5 ${className}`} style={sectionStyle} >
        <div className="container">
            <div className="row">
                <h2 className='sectionHead'>{sectionHead}</h2>

            </div>
            <div className="row" >
                <div className="col-md-9 order-2 order-md-1 col-12 px-2 ps-md-3  interTxt  d-flex align-items-center">
                    <p>
                    {sectionDesc}
                    </p>
                </div>
                <div className="col-md-3 order-1 order-md-2 col-12 bloodDonationImg teamwokimg d-flex justify-content-center align-items-center">
                    <img height='200px' width='200px' src={sectionImgSrc} alt='' />
                </div>
            
            </div>
        </div>
    </section>
  )
}
