import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import React from 'react';
export default function LogoutBUtton(){
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate('/')
    }
    return(
        <StyledWrapper>
      <button className="button" onClick={handleLogout}>
        <div className="blob1" />
        <div className="blob2" />
        <div className="inner">Logout</div>
      </button>
    </StyledWrapper>
    )

}


const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    font-size: 1rem;
    border-radius: 16px;
    border: none;
    padding: 2px;
    background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
    position: relative;
  }
  .blob1 {
    position: absolute;
    width: 60px;
    height: 100%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #3fe9ff,
      #0000ff80,
      transparent
    );
    box-shadow: -10px 10px 30px #0051ff2d;
  }

  .inner {
    padding: 14px 25px;
    border-radius: 14px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
  }
  .inner::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 14px;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #00e1ff1a,
      #0000ff11,
      transparent
    );
    position: absolute;
  }`;

