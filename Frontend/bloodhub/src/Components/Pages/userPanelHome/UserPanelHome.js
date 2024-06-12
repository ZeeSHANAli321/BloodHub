import React from 'react'
import "./UserPanelHome.css"
import Header2 from 'Components/Molecules/navBars/Header2/Header2'
import UserPanelNavBar from 'Components/Molecules/navBars/UserPanelNavBar/UserPanelNavBar'
import SectionT2 from 'Components/Molecules/Sections/SectionT2';
import DonateBlood from "Assets/images/DonateBlood.png"
import LabelledImgCard from 'Components/Molecules/cards/labelledImgCard/LabelledImgCard';
import Donor from "Assets/images/blooddonor.png"
import Seeker from "Assets/images/job-seeker.png"
import bank from "Assets/images/blood-bank.png"
import User from "Assets/images/target-user.png"
import MapCard from 'Components/Molecules/cards/mapCard/MapCard';

import { getHeight } from 'Utils/util';
import { useEffect,useState } from 'react';



export default function UserPanelHome() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    useEffect(() => {
        const donorRegSection = document.querySelector('.firstSection');
        donorRegSection.style.setProperty('padding-top', `${getHeight('header')}px`, 'important');
    }, [width]);

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
    <Header2 id="header"/>
    <SectionT2 className="firstSection pb-4"  sectionHead="Save Blood , Donate Blood" sectionImgSrc={DonateBlood} varColor="--c-theme" sectionDesc={sectionDesc}/>
    <section className='weHaveConnectedTo  py-5' style={{background:"var(--c-theme2)"}}>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h3 className='jomhuria' style={{fontFamily:"jomhuria",fontSize:"50px"}}>We have Connected to ..</h3>
                </div>
            </div>
            <div className='row py-2'>
                <div className='col d-flex w-100 justify-content-around'>
                    <LabelledImgCard img={Donor} imgClass="dataImg"  label="50K Donor" />
                    <LabelledImgCard img={Seeker} imgClass="dataImg"  label="50K Donor" />
                    <LabelledImgCard img={bank} imgClass="dataImg"  label="50K Donor" />
                    <LabelledImgCard img={User} imgClass="dataImg"  label="50K Donor" />
                </div>
            </div>
        </div>
    </section>
    
    <section className='usersNearby  py-5' style={{background:"var(--c-white)"}}>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                <h3 className='jomhuria' style={{fontFamily:"jomhuria",fontSize:"50px"}}>Users Nearby</h3>
                </div>
            </div>
            <div className='row py-2'>
                <div className='col d-flex w-100 justify-content-around'>
                    <MapCard />
                </div>
            </div>
        </div>
    </section>

    <UserPanelNavBar />

    </>
  )
}
