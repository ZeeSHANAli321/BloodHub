import React from 'react'
import "./Loading.css"
import logo from "Assets/images/No-Bg-logo2.png"
import { useState,useEffect } from 'react';

const RippleEffect = () => {
    const [ripples, setRipples] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRipples((prevRipples) => [
                ...prevRipples,
                {
                    id: Date.now(),
                    style: {
                        top: '50%',
                        left: '50%',
                        width: '200px',
                        height: '200px',
                        marginLeft: '-100px',
                        marginTop: '-100px'
                    }
                }
            ]);

            if (ripples.length > 4) {
                setRipples((prevRipples) => prevRipples.slice(1));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [ripples]);

    return (
        <div className="ripple-container">
            {ripples.map((ripple) => (
                <span key={ripple.id} className="ripple" style={ripple.style}></span>
            ))}
        </div>
    );
};

function Loading() {
  return (
    <>
        <div className='loading-main flex-column'>
            <div className='loading-logo'>
                <img src={logo} height="150px" alt='logo' />
            </div>
            
            <RippleEffect/>
        </div>
    </>
  )
}

export default Loading