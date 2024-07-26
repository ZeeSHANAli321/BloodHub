import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ButtonT1({ text, classStyle, type, to=null,onClick}) {
  const navigate = useNavigate()
  const homeBtnStyle = {
    color: "black",
    borderColor: "red",
    fontWeight: "bold",
    background: "white",
  };
  const handleClick = () => {
    if(to){
      navigate(to)
    }else{
      onClick()
    }
  }
  return (
    <>
      <Link to={to} style={{textDecoration:"none"}}>
        <Button
          variant="outlined"
          type={type}
          className={classStyle}
          style={homeBtnStyle}
          onClick={handleClick}
        >
          {text}
        </Button>
      </Link>
    </>
  );
}
