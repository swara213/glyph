import React, { useState } from "react";
import {
  Button,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
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
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value) ;
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault() ; 
    const form = event.target ; 

    const bookTitle = form.bookTitle.value ; 
    const authorName = form.authorName.value ; 
    const imageURL = form.imageURL.value ; 
    const category = form.categoryName.value
    const bookDescription = form.bookDescription.value ; 
    const bookPdfUrl = form.bookPdfUrl.value ; 

    const bookObj = {
        bookTitle ,authorName, imageURL,category,bookDescription,bookPdfUrl
    }
    // const token = "76f72705b2734af44f981fce067e0263993bb313df98a31f98dc69e9df73a2f5fbc299d1223c9e0d8896775100fe86c2f0e56e9c50e00e9f5cab40dbe6431ec6" ; 
    const token = localStorage.getItem("token");
    console.log(bookObj) ; 

    // SENDING TO DB
    fetch("http://localhost:5009/api/books/create-book" ,{
        method: "POST" , 
        headers : {
            "Content-Type" : "application/json", 
            "Authorization": `Bearer ${token}`,
        },
        body : JSON.stringify(bookObj)
    }).then(res => res.json().then(data => {
        // console.log(data)
        alert("BOOK UPLOADED SUCCESSFULLY!")
        form.reset() ; 
    }))
    
  }
  return (
    <div className="px-4 my-12">
      <h2 className="font-bold text-3xl mb-8 ">Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Enter the Book Title"
              required
              className="h-20 rounded"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Enter the Author Name"
              required
              className="h-20 rounded"
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
              className="h-20 rounded"
            />
          </div>

          {/* Category */}

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <Select
              id="inputState"
              name="categoryName"
              className="h-30 rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your Book Description"
            required
            rows={4}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPdfUrl"
            name="bookPdfUrl"
            type="text"
            placeholder="Enter Book PDF URL "
            required
          />
        </div>

        <Button type="submit" className="mt-5 bg-yellow-500 text-black text-center">Upload Book</Button>
      </form>
    </div>
  );
};

export default UploadBook;
