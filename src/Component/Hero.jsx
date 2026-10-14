import { Stack } from '@mui/material'        
import Button from '@mui/material/Button'    
import React from 'react'                   

function Hero() {
  return (
    <>
      <section className='bg-[#ffffff] w-full  flex items-center justify-center '>
        <section className='flex flex-col-reverse lg:flex-row items-center justify-between w-[80%] md:w-[82%] lg:w-[90%] max-w-7xl mx-auto px-6 md:py-16 py-5 gap-10 h-screen'>

          <div className='flex-1 flex flex-col items-start gap-6'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-lg'>
              Simply explained <br /> with illustrations
            </h1>
            <p className='text-gray-500'>
              There are a lot of different components that will help you create the perfect look for your project
            </p>
            <Stack spacing={2} direction="row">
              <Button 
                variant="contained" 
                sx={{ 
                    bgcolor: '#5F62E2', 
                    color: 'white',
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: '12px', md: '14px' },
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#4a4dc7' }
                  }}
              >
                  Get Started
              </Button>
              <Button 
               variant="outlined" 
               sx={{ 
                borderColor: '#5F62E2', 
                color: '#5F62E2', 
                backgroundColor: 'rgba(95, 98, 226, 0.2)',
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: '12px', md: '14px' },
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 'bold',
               '&:hover': { backgroundColor: 'rgba(95, 98, 226, 0.4)' }
               }}
              >
                Learn More
              </Button>
           </Stack>
          </div>

          <div className='md:flex-1 justify-center items-center'>
            <img className="w-full h-auto md:max-w-md lg:max-w-lg md:ml-8 lg:ml-15 ml-0" src="/rocket.png" alt="Rocket" />
          </div>

        </section>
      </section>
    </>
  )
}

export default Hero  