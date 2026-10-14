import React from 'react'
import Navbar from "./Component/Navbar";
import './App.css'
import Hero from './Component/Hero';
import Presentation from './Component/Presentation';
import Slider from './Component/Slider';
import Video from './Component/Video';
import Time from './Component/Time';
import BombArea from './Component/BombArea';
import Blog from './Component/Blog';
import Footer from './Component/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Presentation />
    <Slider/>
    <Video />
    <Time />
    <BombArea />
    <Blog />
    <Footer />
    </>
  )
}

export default App
