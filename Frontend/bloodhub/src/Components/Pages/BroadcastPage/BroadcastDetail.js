import React, { useEffect, useState } from 'react'
import {  useNavigate, useOutletContext, useParams } from 'react-router-dom'
import "./BroadcastDetail.css"
import Donor from "Assets/images/blooddonor.png"
import bank from "Assets/images/blood-bank.png"
import LabelledImgCard from 'Components/Molecules/cards/labelledImgCard/LabelledImgCard'
import { parseISO,format } from 'date-fns'
import { patchModel } from 'Services/FetchData'

const Popup = ({content,closePopup,setAssignedDonor,setBroadcast}) => {
    console.log(content)
    const donor = content[0].emailId
    const isAssign = content[1]

    const {id} = useParams()
    const gettingBroadcast = async () => {
        await fetch(`http://localhost:8000/api/BroadcastModel/${id}/`, {
            credentials: 'include' 
        })
        .then(response => response.json())
        .then(data => {setBroadcast(data);setAssignedDonor(data.donor_assign)})
        .catch(error => console.error('Error fetching data:', error));
    }
    console.log(content)
    let updateData = {}
    const toggleAssigningDonr = async () => {
        try {

            if(!isAssign){
                updateData = {
                    'b_id':id
                }
            }else{
                updateData = {
                    'id':donor,
                    'b_id':id
                }
            }
            const endPoint = !isAssign?"remove_assign_donors":"assign_donors"
            console.log(updateData)
            const response = await fetch(`http://127.0.0.1:8000/api/${endPoint}/`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateData)
            });
      
            const data = await response.json();
      
            if (data.status === 'success') {
                console.log(" assigned Successfully " ,data)
                gettingBroadcast()

            } else {
                console.log("not done", data);
            }
            
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (<>
    <div className='popupcontainer' >
        <div className='PopUp p-3' onClick={closePopup}>
            <h3>Do you want to {isAssign?"Assign":"Remove"} doner?</h3>
            <p>
            {
                isAssign?(<>
                 Assigning a Donor means you have talked to him and done deciding that he will donate you blood . <br/> 
                    After Assigning other donors can not accept your broadcast and either you can not add another donor .
                </>):(<>
                    If Donor is not donating blood You can Remove and assign new donor
                </>)
            }
            </p>
            <div className='text-end'>
                 <button
                    onClick={toggleAssigningDonr}
                    className='bg-white text-success me-3'
                        style={{ borderColor: "var(--c-success)", fontWeight: "bolder", padding: "2px 5px", borderRadius: "5px",border:"1px solid " }}
                >
                    {
                        !isAssign?"Yes Remove":"Yes Assign"
                    }
                </button>
                 <button
                    onClick={closePopup}
                    className='bg-white text-danger assign-button'
                        style={{ borderColor: "var(--c-success)", fontWeight: "bolder", padding: "2px 5px", borderRadius: "5px",border:"1px solid " }}
                >
                    NO
                </button>
            </div>
        </div>
        </div>
    </>)
}

export default function BroadcastDetail() {
    const {id} = useParams()
    const [broadcast,setBroadcast] = useState(null)
    const [donated,setDonated] = useState(null)
    const {user} = useOutletContext();
    const isValid = user.broadcastList.includes(Number(id));
    const navigate = useNavigate()

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState(null);
    const [assignedDonor,setAssignedDonor] = useState(null)
  
    const showPopup = (content) => {
      setPopupContent(content);
      setIsPopupVisible(true);
    };
  
    const hidePopup = () => {
      setIsPopupVisible(false);
      setPopupContent(null);
    };

    useEffect(()=>{
        const gettingBroadcast = async () => {
            await fetch(`http://localhost:8000/api/BroadcastModel/${id}/`, {
                credentials: 'include' 
            })
            .then(response => response.json())
            .then(data => {setBroadcast(data);setAssignedDonor(data.donor_assign);setDonated(data.donated)})
            .catch(error => console.error('Error fetching data:', error));
        }
        gettingBroadcast()
    },[id]);
    const getFormatedDate=(date)=>{
        const date_time = parseISO(date);
        const formattedDate = format(date_time,'dd:MM:yyyy');
        return formattedDate;
    }
    const getStatus = (donor)=>{
        const accepted_donors = broadcast.accepted_donors
        const isAccepted = accepted_donors.some(d => d.id === donor.id && d.emailId === donor.emailId);
        return isAccepted?(<span className='text-success'>Accepted</span>):(<span className='text-warning'>Pending</span>)
    }
    useEffect(() => {

        const redirecting = setTimeout(() => {
            if(!isValid){
                navigate("/");
            }
        }, 1000);
        
        return () => clearTimeout(redirecting);
      }, [navigate]);
      const closeBroadCast = async() => {
        if(assignedDonor){
            patchModel({ 'donated':true},broadcast.url).then((data)=>{
                if(data){
                    console.log("Donations successfull")
                    setDonated(true)
                }else{
                    console.log("Some error occured while updating")
                }
            })
        }
      }
    if(isValid && broadcast){
        console.log(broadcast)
        return (<>
            <div className='container p-md-2 ' style={{marginBottom:"100px"}}>
                <div className='row'>
                    <div className='col-auto mx-auto text-center'>
                        <h1 className='main-title'>Broadcast Detail</h1>
                    </div>
                </div>
                {
                    assignedDonor && (<>
                    {donated?
                    (<>
                        <div className='row'>
                        <div className='col-md-8 col-11 d-flex flex-column  isDonatedSection  mx-auto py-2 px-3'>
                            <span><span className='highlight-text'>Blood Donated</span> Congrats,Your Broadcast Request has successfully closed , if you still have blood need , you can broadcast again. </span>
                        </div>  
                    </div>
                    </>)
                    :(<>
                    <div className='row'>
                        <div className='col-md-8 col-11 d-flex flex-column  isDonatedSection  mx-auto py-2 px-3'>
                            <span><span className='highlight-text'>Donor Assigned !!!</span> Now if he have donated blood you can finish this broadcast </span>
                            <div className='d-flex justify-content-end'>
                            <button
                                onClick={closeBroadCast}
                                className='bg-white  text-danger assign-button '
                                    style={{ borderColor: "var(--c-success)", fontWeight: "bolder", padding: "2px 5px", borderRadius: "5px",border:"1px solid " }}
                            >
                            Close Broadcast
                            </button>
                            </div>   
                        </div>  
                    </div>
                    </>)
                    }
                    
                    </>)
                }
                
                <div className='row py-2 '>
                    <div className='col-md-4 ms-md-auto me-md-0 col-11 order-2  order-md-1 mx-auto broadcast-detail p-3 '>
                        <table className='table broadcast-detail-table'>
                            <tr>
                                <th>Broadcast Date</th>
                                <td className='text-success'>{getFormatedDate(broadcast.created_at)}</td>
                            </tr>
                            <tr>
                                <th>Blood Group  </th>
                                <td className='text-success'>{broadcast.bloodGroup} </td>
                            </tr>
                            <tr>
                                <th>Requre Unit </th>
                                <td className='text-success'>{broadcast.requireUnit} ml</td>
                            </tr>
                            <tr>
                                <th>Address  </th>
                                <td className='text-success'>{broadcast.address} </td>
                            </tr>
                            <tr>
                                <th>Message </th>
                                <td className='text-success'>{broadcast.msg}</td>
                            </tr>
                            <tr>
                                <th>Donor Assign </th>
                                <td className='text-success'>{assignedDonor?(<b className='text-success' style={{background:"inherit"}}>{assignedDonor.firstName+" "+assignedDonor.lastName}</b>):<span className='text-danger' style={{background:"inherit"}}>Not Assigned</span>}</td>
                            </tr>
                        </table>
                    </div>  
                    <div className='col-md-4  col-11 order-1 d-flex flex-column ms-md-0 mx-auto align-items-center justify-content-center'>
                        <h4>Your broadcast has send to </h4>
                        <div className='broadcast-send-info-card  w-100 d-flex align-items-center justify-content-evenly'>
                                <LabelledImgCard  img={Donor} imgClass="dataImg"  label={broadcast.notified_donors.length + " Donors"} labelClass="labels" />
                                <LabelledImgCard  img={bank} imgClass="dataImg"  label={"k Blood Banks"} labelClass="labels" />
                        </div>
                    </div>  
                </div>
                <div className='row py-1'>
                    <div className='col-md-8 col-11  mx-auto'>
                        <small>Note:Your Broadcast only sent to those which can fullfill your requirements   </small>
                    </div>  
                </div>

                



                <div className='row py-2'>
                    <div className='col-sm-8  col-auto mx-auto sent-donor-list '>
                        <div className='head-send-donor'>
                            <h5>List of Donors which have your broadcast </h5>
                        </div>
                        <div className='donor-list'>
                            <div class="table-responsive">
                                <table class="table table-hover ">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">BloodGroup</th>
                                        <th scope="col">Blood Donated </th>
                                        <th scope="col">Status</th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {broadcast.notified_donors.map((donor,index)=>(

                                            <tr key={index}>
                                                <th scope="row">{index+1}</th>
                                                <td>{donor.firstName+" "+donor.lastName}</td>
                                                <td>{donor.bloodGroup}</td>
                                                <td>{donor.totalBloodDonated}</td>
                                                <td>{getStatus(donor)}</td>
                                                <td>
                                                <span className='text-primary cursor-pointer ' onClick={()=>navigate(`/userpanelHome/map/${donor.lat}/${donor.lng}`)}>
                                                    <i className="fa-solid fa-route fa-lg" ></i>
                                                </span>
                                                </td>

                                                <td>
                                                {assignedDonor?assignedDonor.emailId === donor.emailId &&(<>
                                                {donated?(<>
                                                    
                                                    <span className='text-success'>DONOR</span>
                                                
                                                </>):(<>
                                                    <button
                                                    onClick={()=>{showPopup([donor,false])}}
                                                    className='bg-white text-danger  assign-button'
                                                    style={{ borderColor: "var(--c-danger)", fontWeight: "bolder", padding: "2px 5px", borderRadius: "5px",border:"1px solid red" }}
                                                >
                                                    Remove
                                                </button>
                                                </>)}
                                                 
                                                </>) : (<>
                                                <button
                                                    onClick={()=>{showPopup([donor,true])}}
                                                    className='bg-white text-success  assign-button'
                                                    style={{ borderColor: "var(--c-success)", fontWeight: "bolder", padding: "2px 5px", borderRadius: "5px",border:"1px solid " }}
                                                >
                                                    Assign
                                                </button>
                                                </>)}
                                                
                                                </td>
                                                <td>
                                                <i className="fa-regular fa-comment text-primary cursor-pointer" title='Start Chat'></i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>  
                </div>
                {isPopupVisible && <Popup closePopup={hidePopup} setBroadcast={setBroadcast} content={popupContent} setAssignedDonor={setAssignedDonor} />}
            </div>
        </>)
    }else{
        return (
            <div className='error-div text-center '>
                <div>
                    <p className='display-1'>Invalid Source!!</p>
                    <p className='lead'>Redirecting to <span className='highlight-text'>Home page</span></p>
                </div>
            </div>
        )
    }
  
}
