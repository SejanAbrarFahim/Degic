import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Time() {
  return (
    <section className='flex flex-col items-center justify-center w-[90%] gap-10 lg:gap-20 py-5 mx-auto'>
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between px-16 gap-8 Ld:gap-16'>
          {/* Left side */}
            <div className='flex-1 items-center'>
                 <img src="/Cake.png" className='w-full h-auto max-w-lg' alt="Error img" />
            </div>

            {/* Right Side  */}
            <div className='flex flex-1 flex-col gap-5 md:gap-8 lg:ml-20'>
                <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-lg'>
                  Make more time for the work
                </h2>
                <p>
                  <TaskAltIcon className='text-green-400 me-2'/>
                  <span>Make more time for the work</span>
                </p>
                <p>
                  <TaskAltIcon className='text-green-400 me-2'/>
                  <span>Simply explained with illustrations</span>
                </p>
                <p>
                  <TaskAltIcon className='text-green-400 me-2'/>
                  <span>Many ways to use illustrations in design</span>
                </p>
                <Button variant="outlined" sx={{ borderColor: '#5F62E2', color: '#5F62E2', backgroundColor: 'rgba(95, 98, 226, 0.2)', width:'160px' }} endIcon={<ArrowForwardIcon />}>
                Explore All
              </Button>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-between px-16 gap-8 Ld:gap-16'>
          {/* Left side */}
            <div className='flex flex-1 flex-col gap-5 md:gap-8 '>
                <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-lg'>
                  Make more time for the work
                </h2>
                <p>
                  <TaskAltIcon className='text-green-400 me-2'/>
                  <span>Make more time for the work</span>
                </p>
                <p>
                  <TaskAltIcon className='text-green-400 me-2'/>
                  <span>Simply explained with illustrations</span>
                </p>
                <p>
                  <TaskAltIcon className='text-green-400 me-2'/>
                  <span>Many ways to use illustrations in design</span>
                </p>
                <Button variant="outlined" sx={{ borderColor: '#5F62E2', color: '#5F62E2', backgroundColor: 'rgba(95, 98, 226, 0.2)', width:'160px' }} endIcon={<ArrowForwardIcon />}>
                Explore All
              </Button>
            </div>

            {/* Right Side  */}
            <div className='flex-1 items-center'>
                 <img src="/IMGL.png" className='w-full h-auto max-w-lg' alt="Error img" />
            </div>
        </div>
    </section>
  )
}

export default Time