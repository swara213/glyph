// import React, { useEffect, useState } from "react";
// import { Table } from "flowbite-react";
// import { all } from "axios";
// import { Link } from "react-router-dom";

// const ManageBooks = () => {
//   const [allBooks, setAllBooks] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5005/all-books")
//       .then((res) => res.json())
//       .then((data) => setAllBooks(data));
//   }, []);
// // delete book 
//   const handleDelete= (id) => {
//     console.log(id) ; 
//     fetch(`http://localhost:5005/book/${id}` , {
//       method:"DELETE" , 
      
//     }).then(res => res.json()).then(data => {
//       alert("BOOK IS SUCCESSFULLY DELETED!") 
//       // setAllBooks(data) ; 
//     })
//   } 
//   return (
//     <div className="px-4 my-12">
//       <h2 className="font-bold text-3xl mb-8">Manage Your Books</h2>
//       {/* TABLE  */}
//       <Table className="lg:w-[1180px] bg-[#D6C1A1] text-black">
//         {" "}
//         {/* Set table background and text color */}
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
//         </Table.Head>
//         {
//           allBooks.map((book , index) => <Table.Body className="divide-y bg-[#D6C1A1]" key={book._id}>
//             <Table.Row className="bg-[#D6C1A1]">
//             <Table.Cell className="whitespace-nowrap font-medium text-black">
//               {index +1 }
//             </Table.Cell>
//             <Table.Cell className="whitespace-nowrap font-medium text-black">
            
//               {/* Set text color */}
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
    fetch("http://localhost:5005/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  // Delete book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5005/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("BOOK IS SUCCESSFULLY DELETED!");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="font-bold text-3xl mb-8">Manage Your Books</h2>
      {/* TABLE */}
      <Table className="lg:w-[1180px] bg-[#D6C1A1] text-black">
        <Table.Head>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">NO.</Table.HeadCell>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">Book Name</Table.HeadCell>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">Author Name</Table.HeadCell>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">Category</Table.HeadCell>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">Prices</Table.HeadCell>
          <Table.HeadCell className="bg-[#D6C1A1] text-black">Edit or Manage</Table.HeadCell>
        </Table.Head>
        {allBooks.map((book, index) => (
          <Table.Body className="divide-y bg-[#D6C1A1]" key={book._id}>
            <Table.Row className="bg-[#D6C1A1]">
              <Table.Cell className="whitespace-nowrap font-medium text-black">{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-black">{book.bookTitle}</Table.Cell>
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
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default ManageBooks;