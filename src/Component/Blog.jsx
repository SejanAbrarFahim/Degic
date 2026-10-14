import React from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Blog() {
    const CarData = [
        {
            id:1,
            imgSrc:"/Blog.png",
            title: "Make myspace your best designed space",
            description: "A lot of different components that will help you create the perfect look for your project",
            ButtonLevel: "Design"       
        },
        {
            id:2,
            imgSrc:"/Blog 1.png",
            title: "My company culture has changed today",
            description: "A lot of different components that will help you create the perfect look for your project",
            ButtonLevel: "3D illustrations"       
        },
        {
            id:3,
           imgSrc:"/Blog 2.png",
            title: "Professionals in craft! All products were super great",
            description: "A lot of different components that will help you create the perfect look for your project",
            ButtonLevel: "Development"       
        },
    ]


  return (
    <section className='w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-6 lg:px-10 xl:px-14 py-12'>
        <div className='flex flex-col xl:flex-row justify-between items-center mb-10 gap-5 '>
            <div>
                <h1 className='text-3xl md:text-5xl lg:text-6xl text-gray-800 font-bold
                '>Get more from our blog</h1>
                <p className='max-w-md text-[20px] mt-1 text-gray-500'>There are a lot of different components that will help you create the perfect look for your project</p>
            </div>
            <div>
                <Button variant="outlined" sx={{ borderColor: '#5F62E2', color: '#5F62E2', backgroundColor: 'rgba(95, 98, 226, 0.2)' }} endIcon={<ArrowForwardIcon />}>
                Explore All
              </Button>
            </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5!'>
            {
              CarData.map((card)=>(
                <div key={card.id} className='flex flex-col bg-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition duration-300'>
                   <img src={card.imgSrc} alt={card.title} />
                   <div className='p-6'>
                        <h3 className='text-gray-600 text-xl md:text-2xl mb-4'>{card.title}</h3>
                        <p className='text-gray-600 mb-4'>{card.description}</p>
                        <button className='text-sm py-2 px-3 rounded-lg bg-green-100 text-green-700'>{card.ButtonLevel}</button>
                   </div>
                </div>
              ))  
            }
        </div>

    </section>
  )
}

export default Blog