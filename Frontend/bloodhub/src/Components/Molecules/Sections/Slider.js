import React from 'react'
import "./Slider.css"

function Slider({sliderImgList}) {
  return (
    <>
        {/* Bootstrap Carousel */}
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {   sliderImgList.map((img,index)=>(

                <div className={`carousel-item ${index===0 && "active"}`}  data-bs-interval="2000" key={index}>
                    <div className='carousel_item_img_container' >
                        <img src={img.img} className="d-block w-100" alt={img.title}/>
                    </div>
                </div>

                ))     
            }
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>   
    </>
  )
}

export default Slider