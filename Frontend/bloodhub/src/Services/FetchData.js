import { useState,useEffect } from "react";

export function GetData(api){
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${api}`, {
            credentials: 'include'  // Include cookies in the request for session management
        })
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error fetching data:', error));
    }, [api]);
    return items;
}

export function PostData(api,data){
    fetch(api,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)                
        
    }).then((responce)=>{
        console.log(responce)
        return responce;
    })
}

export const fetchUser = async () => {
    const SessionData = {
        'userEmail': sessionStorage.getItem('user_id'),
        'password': sessionStorage.getItem('user_pass'),
        'isDonor': JSON.parse(sessionStorage.getItem('user_type'))
    };
    console.log("session data", JSON.stringify(SessionData));
    
    try {
        const response = await fetch('http://127.0.0.1:8000/api/get_user/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(SessionData)
        });

        const data = await response.json();

        if (data.status === 'success') {
            console.log("done == ", data.message, data.status, data.user);
            return data.user
        } else {
            console.log("not done", data.message);
            return null
        }
    } catch (error) {
        console.error("Error:", error);
    }
};