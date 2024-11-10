import React, { useEffect } from "react";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector  } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// import { Card } from "flowbite-react";
import { SwiperSlide } from "swiper/react";
import { addToCart } from "../redux/features/cart/cartSlice";

const Shop = () => {
  const [books, setBooks] = useState([]);

  const dispatch = useDispatch() ; 
  

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  
  useEffect(() => {
    fetch("http://localhost:5009/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">BOOKS</h2>

      <div className="grid gap-10 my-12 lg:grid-cols-4  grid-cols-1">
        {books.map((book) => (
          <SwiperSlide key={book._id} className="flex flex-col h-full border rounded-lg overflow-hidden">
            <Link to={`/book/${book._id}`} className="flex-1">
              <img src={book.imageURL} alt="" className="h-auto w-full object-cover" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                <p>{book.bookTitle}</p>
              </h5>

            </Link>
            <div className='mt-auto'>
            <button
                  onClick={() => handleAddToCart(book)}
                  className="w-full bg-[#DBC8A6] hover:bg-yellow-500 p-2 rounded flex items-center justify-center space-x-2 mt-2"
                >
                <FaCartShopping className="w-4 h-4 text-white" />
                <span className="text-white">Add to Cart</span>
                </button>
              </div>
          </SwiperSlide>
        ))}
      </div>
    </div>
  );
};

export default Shop;
