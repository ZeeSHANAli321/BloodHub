import React from 'react'
import Button from "@mui/material/Button";


export default function ButtonT1({text,classStyle,type}) {
    const homeBtnStyle = {
        color: "black",
        borderColor: "red",
        fontWeight: "bold",
        background:'white',
        
      };
  return (
    <>
    <Button  variant="outlined" type={type} className={classStyle} style={homeBtnStyle}>{text}</Button>
    </>
  )
}