import React from 'react'
import "./ProfileCard.css"
import { useState } from 'react'
import ButtonT2 from 'Components/Atoms/Buttons/ButtonT2'
import img from "Assets/images/blood-bank.png"
import { patchUser } from 'Services/FetchData'
export default function ProfileCard({user,updateUser,user_id}) {
    const [firstName,setFirstName] = useState(user.firstName);
    const [lastName,setLastName] = useState(user.lastName);
    const [bloodGroup,setBloodGroup] = useState(user.bloodGroup);
    const [dob,setDOB] = useState(user.dateOfBirth);
    const [gender,setGender] = useState(user.Gender);
    const [diesease,setDiesease] = useState(user.any_blood_related_disease);
    const [pinCode,setPinCode] = useState(user.pincode);
    const [address,setAddress] = useState(user.address);

    const [editable,setEditable] = useState(false)

    const userData = {
        "firstName": firstName,
        "lastName": lastName,
        "pincode": pinCode,
        "bloodGroup": bloodGroup,
        "dateOfBirth": dob,
        "Gender": gender,
        "address": address,
        "any_blood_related_disease": diesease,
        "complete_address": address,
    }

    const handleEdit = ()=>{
        setEditable(editable?false:true);
        console.log(editable)
    }
    const cancelEdit = ()=>{
        setEditable(false)
    }
    const updateUserData = ()=>{
        patchUser(userData,user_id).then((data)=>{
            if(data){
            updateUser();
            setEditable(false);
            }
        })

    }
  return (
    <div className='ProfileCard container'>
        <div className='row '>
            <div className='col-md-4 py-3 py-md-5'>
               <div className='profile_pic_container mx-auto   '>
                    <img src={img} alt="" />
               </div>
            </div>
            <div className='col-md-8 py-3 py-md-5'>
               <div className='profileHeading d-flex justify-content-between align-items-center'>
                    <h1 style={{fontSize:"80px"}}>Personal details</h1>
                    <button onClick={handleEdit} className='me-md-5 editProfile' style={{fontSize:"25px",background:"none",width:"auto",padding:"none",border:"none"}}><i className="fa-solid fa-pen-to-square"></i></button>
               </div>
               {
                editable?<>
                {/* Editable data */}
               <div className='userData'>
                        <table  id="p-data-table">
                            <tbody >
                            <tr>
                                <td>First Name  </td>
                                <td ><input type="text" className='w-75' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} /></td>
                            </tr> 
                            <tr>
                                <td>Last Name  </td>
                                <td ><input type="text" className='w-75'  value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/></td>
                            </tr> 
                            <tr>
                                <td>Mobile No  </td>
                                <td ><b>{user.mobileNo}</b></td>
                            </tr> 
                            <tr>
                                <td>Email id  </td>
                                <td ><b>{user.emailId}</b></td>
                            </tr> 
                            <tr>
                                <td>Blood Group  </td>
                                <td ><select className='w-75' value={bloodGroup} onChange={(e)=>{setBloodGroup(e.target.value)}}>
                                    <option value="" >Select Group </option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B+">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                                </td>
                            </tr> 
                            <tr>
                                <td>Date of Birth  </td>
                                <td ><input type="date" className='w-75' value={dob} onChange={(e)=>{setDOB(e.target.value)}} /></td>
                            </tr> 
                            <tr>
                                <td>Gender  </td>
                                <td ><select className='w-75' value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                                    <option value="" >Select Gender</option>
                                    <option value="Male" >Male</option>
                                    <option value="Female" >Female</option>
                                    <option value="Other">Whatever other you identified as</option>
                                     </select>
                                </td>
                            </tr> 
                            <tr>
                                <td>Blood Diesease  </td>
                                <td ><input type="text" className='w-75' value={diesease} onChange={(e)=>{setDiesease(e.target.value)}} /></td>
                            </tr> 
                            <tr>
                                <td>Pin Code  </td>
                                <td ><input type="text" className='w-75' value={pinCode} onChange={(e)=>{setPinCode(e.target.value)}}/></td>
                            </tr> 
                            <tr>
                                <td>Address  </td>
                                <td > <input type="text" className='w-75' value={address} onChange={(e)=>{setAddress(e.target.value)}} /></td>
                            </tr> 
                            </tbody>
                        </table>
               </div>
               <div className='editSubmit pt-3'>
                    <ButtonT2 onClick={updateUserData} text={"Update Changes"} classStyle={""} />
                    <span onClick={cancelEdit} className='text-danger cancelEdit ms-2'>Cancel</span>
               </div>
                </>:<>
                {/* Viewable data  */}
               <div className='userData'>
                        <table  id="p-data-table">
                            <tbody >
                            <tr>
                                <td>Name  </td>
                                <td ><b>{user.firstName+" "+user.lastName}</b></td>
                            </tr> 
                            <tr>
                                <td>Mobile No  </td>
                                <td ><b>{user.mobileNo}</b></td>
                            </tr> 
                            <tr>
                                <td>Email id  </td>
                                <td ><b>{user.emailId}</b></td>
                            </tr> 
                            <tr>
                                <td>Blood Group  </td>
                                <td ><b>{user.bloodGroup}</b></td>
                            </tr> 
                            <tr>
                                <td>Date of Birth  </td>
                                <td ><b>{user.dateOfBirth}</b></td>
                            </tr> 
                            <tr>
                                <td>Gender  </td>
                                <td ><b>{user.Gender}</b></td>
                            </tr> 
                            <tr>
                                <td>Blood Diesease  </td>
                                <td ><b>{user.any_blood_related_disease}</b></td>
                            </tr> 
                            <tr>
                                <td>Pin Code  </td>
                                <td ><b>{user.pincode}</b></td>
                            </tr> 
                            <tr>
                                <td>Address  </td>
                                <td ><b>{user.address}</b></td>
                            </tr> 
                            </tbody>
                        </table>
               </div>
                </>
               }

            </div>
        </div>
    </div>
  )
}
