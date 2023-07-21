import React from 'react'
import ContainerCard from '../Cards/ContainerCard'
import NavBar from './NavBar'
import Title from './Title'
import "./Homestyle.css"
import Footer from './Footer'
import { useRef } from "react";

const Home = () => {
  const resultRef = useRef(null);
 
  return (
    <div className='maindiv' >
        <NavBar resultRef={resultRef}/>
        <Title/>
        <ContainerCard ref={resultRef} />
        <Footer />
    </div>
  )
}

export default Home
