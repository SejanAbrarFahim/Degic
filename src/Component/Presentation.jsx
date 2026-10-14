import React from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Presentation() {
  const CardData=[
    {
      source:'Group 31.png',
      heading: 'Managment',
      text: 'Software platform for running your new internet business',
    },
    {
      source:'Group 32.png',
      heading: 'Entertainment',
      text: 'Software platform for running your new internet business',
    },
    {
      source:'Group 4.png',
      heading: 'Marketing',
      text: 'Software platform for running your new internet business',
    },
    {
      source:'Group 3.png',
      heading: 'References',
      text: 'Software platform for running your new internet business',
    },

  ];

  const SocialLinks = [
    {link: <FacebookIcon />, url: 'https://www.facebook.com'},
    {link: <XIcon />, url: 'https://www.twitter.com'},
    {link: <InstagramIcon />, url: 'https://www.instagram.com'},
  ]

  return (
    <section className='bg-gray-50 flex items-center justify-center lg:h-screen md:h-auto'>
        <div className='container flex flex-col lg:flex-row items-center gap-20 py-12 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 width-full lg:w-1/2'>
              {CardData.map((card, index) => (
                <div key={index} className='flex flex-col items-center justify-center bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                  <div className='w-28 h-28 mb-6'><img src={card.source} alt={card.heading}/> </div>
                  <h3 className='text-xl font-semibold text-black mb-4'>{card.heading}</h3>
                  <p className='text-gray-600'>{card.text}</p>
                </div>
              ))}
          </div>
          <div className='lg:w-1/2 w-full text-center lg:text-left space-y-6'>
            <h2 className='text-black text-3xl md:text-4xl lg:text-5xl font-bold mx-auto max-w-md lg:mx-0'>The quickest way to create modern presentation</h2>
            <p className='w-[70%] mx-auto lg:mx-0'>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>
            <Button variant="outlined" sx={{ borderColor: '#5F62E2', color: '#5F62E2', backgroundColor: 'rgba(95, 98, 226, 0.2)' }} endIcon={<ArrowForwardIcon />}>
                Explore All
              </Button>
             
             <div className='lg:mt-24 mt-12 md:mt-15'>
              <p className='text-2xl text-black font-bold'>Follow us</p>
              <div className='flex justify-center lg:justify-start items-center '>
                  <div className='flex gap-4 mt-4'>
                    {
                      SocialLinks.map((social, index) => (
                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-800 transition-colors bg-[#C4C4C4] duration-300 rounded-full p-4 hover:bg-gray-400'>
                          {social.link}
                        </a>
                      ))
                    }
                  </div>
              </div>
             </div>

          </div>
        </div>
    </section>
  )
}

export default Presentation