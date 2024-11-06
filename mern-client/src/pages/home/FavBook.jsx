import React from 'react'
import FavBookImg from "../../assets/banner-books/favbook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 my-20 flex flex-col md:flex-row justify-between items centre gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt='' className='rounded'></img>
        </div>
        <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold my-6 md:w-3/4 leading-snug'>Find Your Favourite <span className='text-yellow-500'>BOOK HERE!</span></h2>
            <p className=' mb-10 text-lg md:w-4/6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolore iure voluptate incidunt. Ad, quaerat amet rem, minima dolor, deleniti iusto laboriosam molestiae deserunt eum esse! Eligendi aperiam asperiores nostrum?</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 w-3/4 '>
                <div>
                    <h3 className='text-3xl font-bold'>500+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>200+</h3>
                    <p className='text-base'>PDFs Downloaded</p>
                </div>
            </div>
            <Link to="/shop" className='mt-8 block'><button className='bg-yellow-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>EXPLORE</button></Link>
        </div>
    </div>
  )
}

export default FavBook
 