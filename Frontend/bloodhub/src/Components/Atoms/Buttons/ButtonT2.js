import React from "react";
import { Link } from "react-router-dom";

export default function ButtonT2({ text, classStyle, type, to,onClick }) {
  const btnStyle = {
    color: "black",
    fontWeight: "bold",
    background: "var(--c-theme)",
    borderRadius:"20px",
    fontSize:"1rem",
    padding:"5px 10px"

    
  };
  return (
    <>
      <Link to={to} className="" style={{textDecoration:"none"}}>
        <button
          /* variant="contained" */
          type={type}
          className={classStyle}
          style={btnStyle}
          onClick={onClick}
        >
          {text}
        </button>
      </Link>
    </>
  );
}
