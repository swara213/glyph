import React, { useEffect } from "react";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { Card } from "flowbite-react";
import { SwiperSlide } from "swiper/react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/all-books")
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
                        <button className='flex items-center justify-center bg-[#DBC8A6] hover:bg-black p-2 rounded w-full'>
                            <FaCartShopping className='w-4 h-4 text-white mr-2' />
                            Add to Cart
                        </button>
              </div>
          </SwiperSlide>
        ))}
      </div>
    </div>
  );
};

export default Shop;
