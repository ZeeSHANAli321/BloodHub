import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ButtonT1({ text, classStyle, type, to=null,onClick}) {
  const navigate = useNavigate()
  const homeBtnStyle = {
       color: "black",
    borderColor: "red",
    fontWeight: "bold",
    background: "white",
    padding: "5px",
    borderRadius: "10px",
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
        <button
          /* variant="outlined" */
          type={type}
          className={classStyle}
          style={homeBtnStyle}
          onClick={handleClick}
        >
          {text}
        </button>
      </Link>
    </>
  );
}
