import React, { useEffect, useState } from 'react'
import { GetData } from 'Services/FetchData'
import { useNavigate, useOutletContext } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
function BroadcastTable() {
    const { user } = useOutletContext();
    const [broadcastList, setBroadcastList] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const gettingBroadcast = async () => {
            await fetch(`http://localhost:8000/api/get_broadcastList/${user.id}/`, {
                credentials: 'include' 
            })
            .then(response => response.json())
            .then(data => setBroadcastList(data))
            .catch(error => console.error('Error fetching data:', error));
        }
        gettingBroadcast()
    }, [user.id]);
    //const broadcastList = GetData(`http://localhost:8000/api/get_broadcastList/${user.id}/`)

    const getFormatedDate=(date)=>{
        const date_time = parseISO(date);
        const formattedDate = format(date_time,'dd:MM:yyyy');
        return formattedDate;
    }
    if(broadcastList && broadcastList.status === 'success' && broadcastList.broadcastList.length >0 ){
        
        return (
            <div className='row mt-2'>
                <div class="table-responsive">
                <table class="table table-hover caption-top table-responsive">
                    <caption>List of Your Broadcasts</caption>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">BloodGroup</th>
                        <th scope="col">Required Unit </th>
                        <th scope="col">Broadcast Message</th>
                        <th scope="col">Status</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                        {broadcastList.broadcastList.map((broadcast,index)=>(
                            <tr key={index} onClick={()=>{navigate(`${broadcast.id}`)}}>
                                <th scope="row">{index+1}</th>
                                <td>{getFormatedDate(broadcast.created_at)}</td>
                                <td>{broadcast.bloodGroup}</td>
                                <td>{broadcast.requireUnit}</td>
                                <td>{broadcast.msg}</td>
                                <td>{broadcast.donated?(<span className='text-success'>DONATED</span>):(<span className='text-warning'>PENDING</span>)}</td>
                            </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
          )
    }else{
        return (<span className='text-center'></span>)
    }
  
}

export default BroadcastTable