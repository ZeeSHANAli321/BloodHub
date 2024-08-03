import React from 'react'
import LabelledImgCard from 'Components/Molecules/cards/labelledImgCard/LabelledImgCard';
import Donor from "Assets/images/blooddonor.png"
import Seeker from "Assets/images/job-seeker.png"
import bank from "Assets/images/blood-bank.png"
import User from "Assets/images/target-user.png"
import { GetData } from 'Services/FetchData';

export default function UserDataSection() {
    const donor = GetData('http://localhost:8000/api/donor/')
    const seeker = GetData('http://localhost:8000/api/seeker/')
    
  return (
    <div>
        <div className='row py-2'>
                <div className='col d-flex w-100 justify-content-around'>
                    <LabelledImgCard data_aos={"fade-right"} img={Donor} imgClass="dataImg"  label={donor.length+"k Donor"} labelClass="labels" />
                    <LabelledImgCard data_aos={"fade-up-right"} img={Seeker} imgClass="dataImg"  label={seeker.length+"k Seeker"} labelClass="labels" />
                    <LabelledImgCard data_aos={"fade-up-left"} img={bank} imgClass="dataImg"  label="50K Donor" labelClass="labels" />
                    <LabelledImgCard data_aos={"fade-left"} img={User} imgClass="dataImg"  label="50K Donor" labelClass="labels" />
                </div>
        </div>
    </div>
  )
}
