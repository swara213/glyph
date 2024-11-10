import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from'react-redux'
import { addToCart } from '../redux/features/cart/cartSlice';
import { useAuth } from '../context/AuthContext';

const SingleBook = () => {
  
  const dispatch = useDispatch() ; 
  const { currentUser } = useAuth() ; 

  //   const handleAddToCart = (product) => {
  //     dispatch(addToCart(product))
  // }

  const handleAddToCart = (product) => {
    if (!currentUser) {
      Swal.fire({
        title: "Not Logged In",
        text: "Please log in to add items to the cart.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login"); // Redirect to the login page
        }
      });
    } else {
      dispatch(addToCart(product)); // Add product to cart if user is logged in
    }
  };


  const { _id, bookTitle, authorName, imageURL, category, bookDescription } = useLoaderData();
    const [otherBooks, setOtherBooks] = useState([]);

  
  useEffect(() => {
    const fetchOtherBooks = async () => {
      try {
        const response = await fetch(`http://localhost:5009/api/books/other-books/${_id}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setOtherBooks(data.slice(0, 4)); // Limit to 4 books
      } catch (error) {
        console.error("Error fetching other books:", error.message);
      }
    };

    fetchOtherBooks();
  }, [_id]);

  const product = {
    _id,
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
  };

  return (
    <div className="mt-28 px-4 flex">
      {/* Left side: Book Image and Buttons */}
      <div className="flex-none">
        <img src={imageURL} alt={bookTitle} className="h-96" />
         
         
         <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-[#DBC8A6] hover:bg-yellow-500 p-2 rounded flex items-center justify-center space-x-2 mt-2"
                >
                <FaCartShopping className="w-4 h-4 text-white" />
                <span className="text-white">Add to Cart</span>
                </button>
         
         
       </div>

      {/* Right side: Book Details */}
      <div className="flex-grow ml-6">
        <h1 className="font-bold text-3xl">{bookTitle}</h1>
        <h2 className="text-xl text-gray-700">{authorName}</h2>
        <h3 className="text-lg text-gray-600">{category}</h3>
        <p className="mt-4 text-gray-800">{bookDescription}</p>

        <div className="mt-10">
          <h2 className="font-bold text-2xl mb-4">Other Books You Might Like</h2>
          
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
            otherBooks.map(book => <SwiperSlide key={book._id}>
                <Link to ={`/book/${book._id}`}>
                <div>
                    <img src={book.imageURL} alt=""></img>
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
    </div>
  );
};

export default SingleBook;

