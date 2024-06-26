import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonT1({ text, classStyle, type, to }) {
  const homeBtnStyle = {
    color: "black",
    borderColor: "red",
    fontWeight: "bold",
    background: "white",
  };
  return (
    <>
      <Link to={to} style={{textDecoration:"none"}}>
        <Button
          variant="outlined"
          type={type}
          className={classStyle}
          style={homeBtnStyle}
        >
          {text}
        </Button>
      </Link>
    </>
  );
}
