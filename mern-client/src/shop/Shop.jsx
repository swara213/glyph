import React, { useEffect } from 'react'
import { useState} from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const [books,setBooks] = useState([]) ; 

  useEffect( ()=>{
    fetch("http://localhost:5005/all-books").then(res => res.json()).then(data=> setBooks(data)) ; 
  } ,[])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>BOOKS</h2>

      <div className='grid gap-10 my-12 lg:grid-cols-4 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card className="max-w-sm border rounded" 
          >
            <img src={book.imageURL} alt="" className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            <p>
              {book.bookTitle}
            </p>
            </h5>
            <p>
              {/* {book.bookDescription} */}
            </p>

            <button className = 'bg-yellow-500 font-seemibold text-black py-2 rounded'>BUY NOW</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
