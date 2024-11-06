import React, { useEffect, useState } from 'react'
import BookCards from '../../components/BookCards';

const categories = ["Choose a genre", 
  "Fiction",
  "Horror",
  "Romance",
  "Non-Fiction",
  "Thriller",
  "Mystery",
  "Science Fiction",
  "Fantasy",
  "Bibliiography",
  "Autobiography",
  "History",
  "Self-help",
  "Memoir",
  "Business",
  "Children Books",
  "Travel",
  "Religion",
  "Art and Design",
];

const BestSellerBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
    const [books , setBooks] = useState([]) ; 
    useEffect( () => {
        fetch("http://localhost:5009/api/books").then(res => res.json()).then(data => setBooks(data.slice(0,5)))
    }, []);

    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase())
    console.log(filteredBooks) ; 
  return (
    <div>
       

        <BookCards books={books} headLine = "Best Seller Books"/>
        </div> 

        
   
  )
}

export default BestSellerBooks
