import React from 'react'

function Video() {
  return (
    <section className=' flex items-center justify-center w-full'>
        <div className='md:py-16 py-8'>
            <h2 className='text-center text-2xl md:text-5xl font-bold text-black'> 
                Use illustrations in UI design
            </h2>
            <div className='flex items-center justify-center'>
                <video className='w-[85%] lg:w-[65%] rounded-2xl mt-8 md:mt-16' autoPlay muted loop playsInline src="/VideoLoop.mp4">
                </video>
            </div>
        </div>
    </section>
  )
}

export default Video