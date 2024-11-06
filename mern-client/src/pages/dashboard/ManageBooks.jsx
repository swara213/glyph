// import React, { useEffect, useState } from "react";
// import { Table } from "flowbite-react";

// import { Link } from "react-router-dom";

// const ManageBooks = () => {
//   const [allBooks, setAllBooks] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5009/api/books/")
//       .then((res) => res.json())
//       .then((data) => setAllBooks(data));
//   }, []);
//   useEffect(() => {
//     fetch("http://localhost:5009/api/books/")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log("Fetched data:", data); // Add this for debugging
//             setAllBooks(data);
//         })
//         .catch(error => {
//             console.error("Error fetching books:", error);
//         });
// }, []);
// // delete book 
//   const handleDelete= (id) => {
//     // console.log(id) ; 
//     fetch(`http://localhost:5009/api/books/${id}` , {
//       method:"DELETE" , 
      
//     }).then(res => res.json()).then(data => {
//       alert("BOOK IS SUCCESSFULLY DELETED!") 
//       setAllBooks(data) ; 
//     })
//   } 
//   return (
//     <div className="px-4 my-12">
    
//       <h2 className="font-bold text-5xl">Manage Your Books</h2>
//       <Table className="lg:w-[1180px] bg-[#D6C1A1] text-white">
//         <Table.Head>
//           <Table.HeadCell className="bg-[#D6C1A1] text-black">
//             NO.
//           </Table.HeadCell>
//           <Table.HeadCell className="bg-[#D6C1A1] text-black">
//             Book Name 
//           </Table.HeadCell>
//           <Table.HeadCell className="bg-[#D6C1A1] text-black">
//             Author Name 
//           </Table.HeadCell>
//           <Table.HeadCell className="bg-[#D6C1A1] text-black">
//             Category
//           </Table.HeadCell>
//           <Table.HeadCell className="bg-[#D6C1A1] text-black">
//             Prices
//           </Table.HeadCell>
//           <Table.HeadCell className="bg-[#D6C1A1] text-black">
//             <span >Edit or Manage</span>
//           </Table.HeadCell>
//          </Table.Head>


//         {
//           allBooks.map((book , index) => <Table.Body className="divide-y bg-[#D6C1A1]" key={book._id}>
//             <Table.Row className="bg-[#D6C1A1]">
//             <Table.Cell className="whitespace-nowrap font-medium text-black">
//               {index +1 }
//             </Table.Cell>
//             <Table.Cell className="whitespace-nowrap font-medium text-black">
//               {book.bookTitle}
//             </Table.Cell>
//             <Table.Cell className="text-black">{book.authorName}</Table.Cell>
//             <Table.Cell className="text-black">{book.category}</Table.Cell>
//             <Table.Cell className="text-black">$10.00</Table.Cell>
//             <Table.Cell>
//               <Link  
//                   className="font-medium text-cyan-600 hover:underline mr-5"
//                   to ={`/admin/dashboard/edit-books/${book._id}`}>
//                 Edit
//               </Link>
//               <button onClick={() => handleDelete(book._id)} className="bg-red-600 px-4 py-1  text-white -sm hover:bg-green-700">Delete</button>
//             </Table.Cell>
//           </Table.Row>
//           </Table.Body>)
//         }
        
//       </Table>
      
//     </div>
//   );
// };

// export default ManageBooks;

import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:5009/api/books/");
        const data = await res.json();
        console.log("Fetched data:", data); // Log fetched data for debugging
        setAllBooks(data); // Assuming data is an array of books
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5009/api/books/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      alert("BOOK IS SUCCESSFULLY DELETED!");
      
      // Filter out the deleted book from the allBooks array
      setAllBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="px-4 my-12">
      <h2 className="font-bold text-5xl">Manage Your Books</h2>
      <Table className="lg:w-[1180px] bg-[#D6C1A1] text-white">
        <Table.Head>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">NO.</Table.HeadCell>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">Book Name</Table.HeadCell>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">Author Name</Table.HeadCell>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">Category</Table.HeadCell>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">Prices</Table.HeadCell>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y bg-[#D6C1A1]">
          {allBooks.map((book, index) => (
            <Table.Row className="bg-[#D6C1A1]" key={book._id}>
              <Table.Cell className="whitespace-nowrap font-medium text-black">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-black">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell className="text-black">{book.authorName}</Table.Cell>
              <Table.Cell className="text-black">{book.category}</Table.Cell>
              <Table.Cell className="text-black">$10.00</Table.Cell>
              <Table.Cell>
                <Link
                  className="font-medium text-cyan-600 hover:underline mr-5"
                  to={`/admin/dashboard/edit-books/${book._id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-red-600 px-4 py-1 text-white -sm hover:bg-green-700"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageBooks;

