import React from 'react'
import { useEffect,useState } from 'react';
import { differenceInDays, format, addDays, parseISO } from 'date-fns';

function CanBroadcast({seeker}) {
    const [canBroadcast,setCanBroadcast] = useState(null)
    const [timeRemaining,setTimeRemaining] = useState("0:0:0")

    useEffect(() => {
    
        if (seeker.broadcastList.length > 0) {
          const lastBroadcastId = seeker.broadcastList[seeker.broadcastList.length - 1];
      
          const fetchLastBroadcast = async () => {
            console.log("fetching Data");
            try {
              const response = await fetch(`http://localhost:8000/api/BroadcastModel/${lastBroadcastId}/`, {
                credentials: 'include'
              });
      
              if (!response.ok) {
                return { error: "Something unexpected happened." };
              }
      
              const data = await response.json();
              return data;
            } catch (error) {
              console.error("Error fetching data:", error);
              return { error: "Something unexpected happened." };
            }
          };
      
          
          const fetchData = async () => {
            const response = await fetchLastBroadcast();
            if (!response.error) {
              console.log("success");
          
              const date_time = parseISO(response.created_at);
              const formattedDate = format(date_time, 'yyyy-MM-dd HH:mm:ssXXX');
              const last_broadcast_date = new Date(formattedDate);
          
              const now = new Date();
          
              const day_difference = differenceInDays(now, last_broadcast_date);
          
              if (day_difference >= 3) {
                setCanBroadcast(true);
              } else {
                setCanBroadcast(false);
          
                const threeDaysLater = addDays(last_broadcast_date, 3);
                
                const intervalId = setInterval(() => {
                  updateTimeRemaining(threeDaysLater);
                }, 1000);
                
                return () => clearInterval(intervalId);
              }
            }
          };
      
          fetchData();
        } else {
          setCanBroadcast(true);
        }
      }, [seeker.broadcastList]);

      const updateTimeRemaining = (threeDaysLater) => {
        const now = new Date();
        const timeRemaining = threeDaysLater - now;
        
        // Convert remaining time to hours, minutes, and seconds
        const hoursRemaining = String(Math.floor(timeRemaining / (1000 * 60 * 60))).padStart(2, '0');
        const minutesRemaining = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const secondsRemaining = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0');
        
        setTimeRemaining(`${hoursRemaining}:${minutesRemaining}:${secondsRemaining}`);
      };

  return (
    <span className='text-danger' >
    {
        canBroadcast?"Eligible":timeRemaining
    }
    </span>
  )
}

export default CanBroadcast