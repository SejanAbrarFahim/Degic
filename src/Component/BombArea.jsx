import React from 'react'
import Button from '@mui/material/Button'

function BombArea() {
  return (
    <div>
        <section className='bg-[#5F62E2]'>
            <div className='flex flex-col lg:flex-row items-center justify-between mt-24 max-w-[1400px]  mx-auto'>
                <div className='flex-1 flex flex-col gap-8 p-5'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white'>The quickest way to create awesome presentation</h1>
                    <div className='gap-6 flex'>
                        <Button 
                          variant="contained" 
                          sx={{ 
                            backgroundColor: '#f7b801', 
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
                          backgroundColor: 'white',
                          px: { xs: 3, md: 4 },
                          py: { xs: 1.5, md: 2 },
                          fontSize: { xs: '12px', md: '14px' },
                          borderRadius: '8px',
                          textTransform: 'none',
                          fontWeight: 'bold',
                          '&:hover': { backgroundColor: '#ffb627' }
                       }}
                      >
                        Learn More
                      </Button>
                    </div>
                </div>
                <div className='flex-1 flex'>
                    <img className='w-full h-auto md:h-[300px]' src='/bomb.png'/>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default BombArea