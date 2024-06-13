import React from 'react'
import "./home.css";
import ButtonT1 from '../../Atoms/Buttons/ButtonT1'
import BloodDonation from '../../../Assets/images/BloodDonation.png'
import Teamwork from '../../../Assets/images/teamwork.png'
import Blooddonor from '../../../Assets/images/blooddonor.png'
import Login from '../../../Assets/images/log-in.png'
import Chat from '../../../Assets/images/discussion.png'
import Seeker from '../../../Assets/images/job-seeker.png'
import Timeline from '../../../Assets/images/timeline.png'
import Uipanel from '../../../Assets/images/digital-marketing.png'
import contact from '../../../Assets/images/contact.png'
import BlogBlocks from '../../Molecules/cards/blogCards/blogBlocks'
import Header from "../../Molecules/navBars/header"
import Footer from '../../Molecules/footer/footer'
import SectionT1 from 'Components/Molecules/Sections/SectionT1';
import LabelledImgCard from 'Components/Molecules/cards/labelledImgCard/LabelledImgCard';
import Donor from "Assets/images/blooddonor.png"
import bank from "Assets/images/blood-bank.png"
import User from "Assets/images/target-user.png"
import { GetData } from 'Services/FetchData';
import { Element } from "react-scroll";
import { useEffect,useState } from 'react' 


export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
    const blogs = GetData("http://localhost:8000/api/blog-posts/");
    console.log(blogs)
    useEffect(() => {

      const handleScroll = () => {
       
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
  
    }, []);
    
    const whoWeAreSectionDesc = `
    We're Zeeshan Ali, Gaurav Gupta, and Ashirwad Gupta, a trio from "Alpha." Studying Computer Science at Mahamaya IT Polytechnic Maharajganj, it's our final year. Our project, "BloodHub," is our minor project focus. BloodHub is all about helping people with blood needs. It's a website we're making to connect blood donors with those who need it urgently. Our goal is to make it easy for donors to help save lives. By creating this platform, we aim to make donating and receiving blood simpler and quicker. We're using what we've learned to make a real difference in healthcare and the community. As a team, we're excited to apply our skills to benefit others by making blood donation more accessible and impactful.
`;
    
  return (
    
    <>
    <Header type={isScrolled?'none':'home'}/>
    <section id='home' className='hero mb-2 mb-md-5'>
        <div className='heroDiv'>
            <div className="heroTxtContainer d-flex flex-column ">
                <div className='heroTxt px-2'>
                    <h1 >"The joy of saving lives is in your veins. Donate blood."</h1>
                </div>
                <div className="heroNavs d-flex flex-row justify-content-center">
                    <ButtonT1 to="/donorRegistration" text="Become a Donor"/>
                    <ButtonT1 to="/seekerRegistration" text="Become a Seeker" classStyle="ms-2"/>
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

    <SectionT1 name="whoWeAre" id="whoWeAre"  sectionHead="Who we are " sectionImgSrc={Teamwork}  varColor="--c-theme" sectionDesc={whoWeAreSectionDesc} />

    <Element  name='howItWork' id='howItWork' className='howItWork sectionPadding py-5'>
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
    </Element>

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
                {
                    blogs.slice(-4).map((blog) => (
                        <BlogBlocks img={blog.image} title={blog.title} key={blog.id} />
                    ))
                }
                
            </div>
        </div>
    </section>

    <Element name='contact' id='contact' className="contact sectionPadding py-5">
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

                                    <ButtonT1 text="Contact" classStyle="formInput mt-2" />
                            </div>
                           </form>
                   </div>
                </div>
            </div>        
            
        </div>
    </Element>
    <Footer color="var(--c-theme2)"/>
    </>
  )
}
