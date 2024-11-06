import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import {} from 'react/icons/fa6'
// import './styles.css';
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';
import { useDispatch } from'react-redux'
import { addToCart } from '../redux/features/cart/cartSlice';

const BookCards = ({headLine, books}) => {
    const dispatch = useDispatch() ; 

    const handleAddToCart = (product) => {
      dispatch(addToCart(product))
  }
    // console.log(books)
  return (
    <div className='my-16 px-4'>
        <h2 className=' text-5xl text-center font-bold text-black my-5'>{headLine}</h2>

        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
    
        {
            books.map(book => <SwiperSlide key={book._id}>
                <Link to ={`/book/${book._id}`}>
                
              <div className="relative">
                <img src={book.imageURL} alt="" className="w-full" />
                <button
                  onClick={() => handleAddToCart(book)}
                  className="w-full bg-[#DBC8A6] hover:bg-yellow-500 p-2 rounded flex items-center justify-center space-x-2 mt-2"
                >
                <FaCartShopping className="w-4 h-4 text-white" />
                <span className="text-white">Add to Cart</span>
                </button>
              </div>


                <div>
                    <h3>{book.bookTitle}</h3>
                    <p>{book.authorName}</p>
                </div>
                <div>
                    <p>$10.00</p>
                </div>
                </Link>
            </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}

export default BookCards
