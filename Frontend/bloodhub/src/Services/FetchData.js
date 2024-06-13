import { useState,useEffect } from "react";

export function GetData(api){
    const [items, setItems] = useState([]);

    useEffect(()=> {
        fetch(`${api}`)
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error fetching data:', error));
    },[]);
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