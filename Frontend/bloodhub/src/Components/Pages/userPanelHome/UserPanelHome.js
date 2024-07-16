import React from 'react'
import "./UserPanelHome.css"
import SectionT2 from 'Components/Molecules/Sections/SectionT2';
import DonateBlood from "Assets/images/DonateBlood.png"
import MapCard from 'Components/Molecules/cards/mapCard/MapCard';
import BlogBlocks from 'Components/Molecules/cards/blogCards/blogBlocks';
import { GetData } from 'Services/FetchData';
import { useOutletContext } from 'react-router-dom';
import UserDataSection from 'Components/Molecules/Sections/UserDataSection';


export default function UserPanelHome() {
    const {user} = useOutletContext();
    const blogs = GetData("http://localhost:8000/api/blogs/");
    const sectionDesc=(<>
    Join Us for an <span className='text-danger'> Upcoming Blood Drive</span>
    <small >
        Date:12/12/2022
        <br/>
        Location:Falana diklana , dhanewa dhanei , Maharajganj
    </small>
    </>);

  return (
    <>
    {user?<>
    
    <SectionT2 className="firstSection"  sectionHead="Save Blood , Donate Blood" sectionImgSrc={DonateBlood} varColor="--c-theme" sectionDesc={sectionDesc}/>

    <section className='weHaveConnectedTo  py-5' style={{background:"var(--c-theme2)"}}>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h3 className='jomhuria' style={{fontFamily:"jomhuria",fontSize:"50px"}}>We have Connected to ..</h3>
                </div>
            </div>
            <UserDataSection />
        </div>
    </section>
    
    <section className='usersNearby  py-5' style={{background:"var(--c-white)"}}>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                <h3 className='jomhuria' style={{fontFamily:"jomhuria",fontSize:"50px"}}>Users Nearby</h3>
                </div>
            </div>
            <div className='row'>
            <div className='col-12'>
                  <div className='mapContainer  position-relative' style={{height:"40vh"}}>
                        <MapCard height={"40vh"}  />
                  </div>
            </div>
          </div>
            
        </div>
    </section>
    
    <section className="blogs  py-5 " style={{background:"var(--c-theme2)",marginBottom:`100px`}}>
        <div className="container">
            <div className="row">
                <h3 className='jomhuria' style={{fontFamily:"jomhuria",fontSize:"50px"}}>Blogs</h3>
            </div>
            <div className="row blogBlockContainer d-flex justify-content-center">
                {
                    blogs.slice(-4).map((blog) => (
                        <BlogBlocks img={blog.image} title={blog.title} key={blog.id} />
                    ))
                }
                
            </div>
        </div>
    </section>
    </>:<>


    </>}
    </>
  )
}
