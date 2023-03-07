import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Button} from '../styles/Button'
import { globalContext } from "../contextApi";

const HeroSection = () => {
  const {name,image}=globalContext();
  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-columns">
          <div className="section-hero-data">
            <p className="hero-top-data">This is me</p>
            <h1 className="heading">{name}</h1>
            <p className="para">I'm Rabiya Nadeem, a MERN Stack Developer.If you want to contact me press the button below.</p>
            <Button className="btn hire-me">
          <NavLink to='./contact'>hire me</NavLink>
         </Button>
          </div>
          <div className="section-hero-image">
            <picture>
              <img src={image} className="hero-img"/>
            </picture>
          </div>
         </div>
        
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
padding: 9rem 0;
.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn {
  max-width: 16rem;
}
.hero-top-data {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.helper};
}
.heading {
  text-transform: uppercase;
  font-size: 6.4rem;
}
.para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}
.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
picture {
  text-align: center;
}
.hero-img {
  max-width: 80%;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
}`;

export default HeroSection;
