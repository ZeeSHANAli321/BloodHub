import React from 'react'
import "../../styles/home.css";
import Button from "@mui/material/Button";
import BloodDonation from '../../images/BloodDonation.png'
import Teamwork from '../../images/teamwork.png'
import Blooddonor from '../../images/blooddonor.png'
import Login from '../../images/log-in.png'
import Chat from '../../images/discussion.png'
import Seeker from '../../images/job-seeker.png'
import Timeline from '../../images/timeline.png'
import Uipanel from '../../images/digital-marketing.png'
import contact from '../../images/contact.png'
import BlogBlocks from './blogBlocks'
/* import TextField from "@mui/material/TextField"; */

export default function Home() {
    const homeBtnStyle = {
        color: "black",
        borderColor: "red",
        fontWeight: "bold",
        background:'white',
        
      };


  return (
    
    <>
    <section className='hero mb-2 mb-md-5'>
        <div className='heroDiv'>
            <div className="heroTxtContainer d-flex flex-column ">
                <div className='heroTxt px-2'>
                    <h1 >"The joy of saving lives is in your veins. Donate blood."</h1>
                </div>
                <div className="heroNavs d-flex flex-row justify-content-center">
                <Button  variant="outlined" style={homeBtnStyle}>
                  Become a Donor
                </Button>
                <Button className='ms-2' variant="outlined" style={homeBtnStyle}>
                  Become a seeker
                </Button>
                </div>
            </div>
        </div>
        
    </section>
    
    <section className='section2 sectionPadding'>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-12 bloodDonationImg d-flex justify-content-center align-items-center">
                    <img height='200px' width='200px' src={BloodDonation} alt="BloodDonation png" />
                </div>
                <div className="col-md-9 col-12 px-2 ps-md-3  interTxt  d-flex align-items-center">
                    <p>
                    Blood donation is a profound act of empathy and solidarity. It's a gesture that extends beyond individuality, offering hope and a lifeline to those in critical need. Donors, in their selfless contribution, become unsung heroes, embodying the spirit of compassion. Every drop of donated blood holds the potential to save lives in emergencies, surgeries, and battles against illness. It's a unifying force, bringing together diverse communities under a common goal—to preserve life. More than a medical necessity, donating blood is a statement of unity, fostering a culture of giving and care. Each donor becomes a silent guardian, weaving a tapestry of hope and health within society, leaving an enduring impact on the lives they touch.

                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className='whoWeAre sectionPadding py-5'>
        <div className="container">
            <div className="row">
                <h2 className='sectionHead'>Who we are </h2>

            </div>
            <div className="row">
                 <div className="col-md-9 order-2 order-md-1 col-12 px-2 ps-md-3  interTxt  d-flex align-items-center">
                    <p>
                    We're Zeeshan Ali, Gaurav Gupta, and Ashirwad Gupta, a trio from "Alpha." Studying Computer Science at Mahamaya IT Polytechnic Maharajganj, it's our final year. Our project, "BloodHub," is our minor project focus. BloodHub is all about helping people with blood needs. It's a website we're making to connect blood donors with those who need it urgently. Our goal is to make it easy for donors to help save lives. By creating this platform, we aim to make donating and receiving blood simpler and quicker. We're using what we've learned to make a real difference in healthcare and the community. As a team, we're excited to apply our skills to benefit others by making blood donation more accessible and impactful.
                    </p>
                </div>
                <div className="col-md-3 order-1 order-md-2 col-12 bloodDonationImg teamwokimg d-flex justify-content-center align-items-center">
                    <img height='200px' width='200px' src={Teamwork} alt="BloodDonation png" />
                </div>
               
            </div>
        </div>
    </section>

    <section className='howItWork sectionPadding py-5'>
        <div className="container">
            <div className="row">
            <h2 className='sectionHead text-center'>How it works </h2>
            </div>
            <div className="row">
 
                <div className="stepContainer position-relative">
                   
                    <div className="step position-relative  my-5">
                        <h2 className='stepHeader'>Register or Login</h2>
                        <div className="stepDisc d-flex justify-content-between align-items-center">
                         
                            <div className="stepTxt">
                            <p className='lead'>
                            Sign up as a Donor or Seeker, accessing your account.
                            </p>
                            </div>
                            <div className="stepImg">
                                <img src={Login} className='me-md-5'  alt="Blood donor img " />
                            </div>

                        </div>
                        <div className="stepNum">
                            1
                        </div>
                    </div>
                    <div className="step position-relative  my-5">
                        <h2 className='stepHeader'>Donor's action</h2>
                        <div className="stepDisc d-inline-flex justify-content-between align-items-center">
                            <div className="stepImg">
                                <img src={Blooddonor} className='me-md-5'  alt="Blood donor img " />
                            </div>
                            <div className="stepTxt">
                            <p className='lead'>
                            Navigate to Request, Map, Broadcast Notification, or Blood Bank sections to donate blood.
                            <br />
                            Accept broadcast messages and initiate a chat for further coordination.
                            </p>
                            </div>

                        </div>
                        <div className="stepNum">
                            2
                        </div>
                    </div>
                    <div className="step position-relative  my-5">
                        <h2 className='stepHeader'>Chat and Arrangement</h2>
                        <div className="stepDisc d-flex justify-content-between align-items-center">
                         
                            <div className="stepTxt">
                            <p className='lead'>
                            Engage in a chat within the app to discuss and finalize the seeker's blood requirements.
                             </p>
                            </div>
                            <div className="stepImg">
                                <img src={Chat} className='me-md-5'  alt="Blood donor img " />
                            </div>

                        </div>
                        <div className="stepNum">
                            3
                        </div>
                    </div>
                    <div className="step position-relative  my-5">
                        <h2 className='stepHeader'>Seeker's Actions</h2>
                        <div className="stepDisc d-inline-flex justify-content-between align-items-center">
                            <div className="stepImg">
                                <img src={Seeker} className='me-md-5'  alt="Blood donor img " />
                            </div>
                            <div className="stepTxt">
                            <p className='lead'>Use the Broadcast option to announce their blood needs with a brief message.
                            <br />Await donor responses and accept blood donations.
                            </p>
                            </div>

                        </div>
                        <div className="stepNum">
                            4
                        </div>
                    </div>

                    <div className="step position-relative  my-5">
                        <h2 className='stepHeader'>Donation Process</h2>
                        <div className="stepDisc d-flex justify-content-between align-items-center">
                         
                            <div className="stepTxt">
                            <p className='lead'>
                                Donors can accept broadcast messages and proceed to donate blood, extending help to seekers.
                            </p>
                            </div>
                            <div className="stepImg">
                                <img src={Timeline} className='me-md-5'  alt="Blood donor img " />
                            </div>

                        </div>
                        <div className="stepNum">
                            5
                        </div>
                    </div>

                    <div className="step position-relative  my-5">
                        <h2 className='stepHeader'>User Panel Features   </h2>
                        <div className="stepDisc d-inline-flex justify-content-between align-items-center">
                            <div className="stepImg">
                                <img src={Uipanel} className='me-md-5'  alt="Blood donor img " />
                            </div>
                            <div className="stepTxt">
                            <p className='lead'>Utilize the map section within the user panel, allowing users to locate donors, blood banks, and ongoing blood drives for convenient access.
                            </p>
                            </div>

                        </div>
                        <div className="stepNum">
                            6
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="row stepTxt text-center">
                <p className='lead'>
                In summary, seekers can request blood while donors can donate. The user panel includes a map section, aiding users in finding donors, blood banks, and ongoing drives, facilitating a smooth blood donation process.
                </p>
            </div>
        </div>
    </section>

    <section className="blogs sectionPadding py-5">
        <div className="container">
            <div className="row">
            <h2 className='sectionHead'>Blogs</h2>
            </div>
            <div className="row sectionDisc">
                <p>
                Discover our Blogs for comprehensive knowledge on the significance of blood donation, effective utilization, and the motivating factors driving this essential act.
                </p>
            </div>
            <div className="row blogBlockContainer d-flex justify-content-center">
                <BlogBlocks />
                <BlogBlocks />
                <BlogBlocks />
                <BlogBlocks />
            </div>
        </div>
    </section>

    <section className="contact sectionPadding py-5">
        <div className="container">
            <div className="row">
            <h2 className='sectionHead text-center'>Contact us</h2>
            </div>
            
            <div className="row">
                <div className="col-md-3  col-12 bloodDonationImg d-flex justify-content-center align-items-center">
                    <img height='200px' width='200px' src={contact} alt="BloodDonation png" />
                </div>
                <div className="col-md-9 col-12 px-2 ps-md-3  interTxt  d-flex align-items-center justify-content-center">
                   <div className="contactForm">
                        <form >
                            <div className="formElement d-flex flex-column">
                                    <input className='formInput' placeholder='Name' type="text" name='name' />
                                    <input className='formInput' placeholder='Email' type="text" name='email' />
                                    <input className='formInput' placeholder='Subject' type="text" name='subject' />
                                    <textarea className='formInput'  name="Message" placeholder='Message' id="Message" cols="30" rows="5" />
                                    <Button type='submit' className='formInput mt-2' variant="outlined" style={homeBtnStyle}> 
                                    Contact
                                    </Button>
                            </div>
                           </form>
                   </div>
                </div>
            </div>        
            
        </div>
    </section>
    </>
  )
}
