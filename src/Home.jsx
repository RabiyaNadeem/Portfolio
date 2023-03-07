import React from 'react'
import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { globalContext } from './contextApi'

const Home = () => {
  // const data={
  //   name:"Hugs for Bugs",
  //   image:"images/hero.svg",
  // };

  const {updateHomePage}=globalContext();
  useEffect(() => {
   updateHomePage();
  }, [])
  
  return (
   <HeroSection />
  )
}

export default Home