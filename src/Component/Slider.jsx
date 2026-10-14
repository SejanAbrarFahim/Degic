import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

function Slider() {
  const slides = [
    {
      id: 1,
      heading: "Make more time for the work that matters most",
      description: "Best software platform for running an internet business.",
      img: "Group.png",
    },
    {
      id: 2,
      heading: "Automate your workflow, find your peace of mind",
      description: "Best software platform for running an internet business.",
      img: "Group1.png",
    },
    {
      id: 3,
      heading: "Code smarter, build faster, and work anywhere",
      description: "Powerful tools designed to keep developers focused and productive without the hassle.",
      img: "Group2.png",
    },
  ]

  const [current, setCurrent] = useState(0)

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  const slide = slides[current]

  const btnStyle = {
  width: 48,
  height: 48,
  minWidth: 0, 
  padding: 0,
  borderRadius: '50%',
  borderColor: '#5F62E2',
  color: '#5F62E2',
  backgroundColor: 'rgba(95, 98, 226, 0.2)',
  '&:hover': {
    backgroundColor: '#5F62E2',
    borderColor: '#5F62E2',
    color: 'white',
  },
}

  return (
   <section className='bg-white flex flex-col items-center justify-center lg:h-screen md:h-auto'>
        <div className='container flex flex-col flex-col-reverse lg:flex-row items-center justify-center gap-9 md:gap-15 lg:gap-20 py-5 md:py-13 lg:py-15 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto'>
        <div className='lg:w-1/2 w-full text-center lg:text-left space-y-6'>
          <img className="w-16 mb-8 md:w-24" src="/Logo.png" alt="Logo" />
          <h1 className="text-3xl md:text-5xl font-bold text-black ">
            {slide.heading}
          </h1>
          <p className="text-gray-500  text-[20px] px-10 lg:px-0">
            {slide.description}
          </p>
          <div className="flex gap-4 items-center justify-center lg:justify-start mt-4">
            <Button variant="outlined" sx={btnStyle} onClick={prevSlide}>
              <ChevronLeft />
            </Button>
            <Button variant="outlined" sx={btnStyle} onClick={nextSlide}>
              <ChevronRight />
            </Button>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full flex-1 flex justify-center items-center">
          <img className="w-full h-auto md:max-w-sm lg:max-w-lg md:ml-8 lg:ml-15 ml-0" src={slide.img} alt={slide.heading} />
        </div>
        </div>

        <div className='px-7 py-14'>
          <img src='/Logos.png' alt='Logos'/>          
        </div>
        
    </section>
  )
}

export default Slider