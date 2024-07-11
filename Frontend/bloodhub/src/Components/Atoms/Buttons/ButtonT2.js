import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonT2({ text, classStyle, type, to,onClick }) {
  const btnStyle = {
    color: "black",
    fontWeight: "bold",
    background: "var(--c-theme)",
    borderRadius:"40px",
    fontSize:"1rem"
    
  };
  return (
    <>
      <Link to={to} className="" style={{textDecoration:"none"}}>
        <Button
          variant="contained"
          type={type}
          className={classStyle}
          style={btnStyle}
          onClick={onClick}
        >
          {text}
        </Button>
      </Link>
    </>
  );
}
