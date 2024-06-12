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