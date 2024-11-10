const Book = require("./book.model");



const postABook = async (req, res) => {
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message: "Book posted successfully", book: newBook})
    } catch (error) {
        console.error("Error creating book", error);
        res.status(500).send({message: "Failed to create book"})
    }
}

// get all books
const getAllBooks =  async (req, res) => {
    try {
        console.log("Fetching all books from database...");
const books = await Book.find().sort({ createdAt: -1 });
console.log("Books fetched:", books);

       
        res.status(200).send(books)
        
    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({message: "Failed to fetch books"})
    }
}



const getSingleBook = async (req, res) => {
    try {
      const { id } = req.params; // Extract ID from request parameters
      const book = await Book.findById(id); // Fetch the book from the database
      if (!book) {
        return res.status(404).json({ message: "Book not found!" });
      }
      res.status(200).json(book); // Send the book data back as JSON
    } catch (error) {
      console.error("Error fetching book:", error);
      res.status(500).json({ message: "Failed to fetch book" });
    }
  };
  
  const getOtherBooks = async (req, res) => {
    const { id } = req.params; // Get the excluded book ID from request params
    try {
        const books = await Book.find({ _id: { $ne: id } }).limit(4); // Fetch other books
        res.status(200).json(books); // Send back the other books
    } catch (error) {
        console.error("Error fetching other books", error);
        res.status(500).json({ message: "Failed to fetch other books" });
    }
};



// update book data
const UpdateBook = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedBook =  await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedBook) {
            res.status(404).send({message: "Book is not Found!"})
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        })
    } catch (error) {
        console.error("Error updating a book", error);
        res.status(500).send({message: "Failed to update a book"})
    }
}

const deleteABook = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(`Attempting to delete book with ID: ${id}`);
        const deletedBook =  await Book.findByIdAndDelete(id);
        if(!deletedBook) {
            res.status(404).send({message: "Book is not Found!"})
        }
        res.status(200).send({
            message: "Book deleted successfully",
            book: deletedBook
        })
    } catch (error) {
        console.error("Error deleting a book", error);
        res.status(500).send({message: "Failed to delete a book"})
    }
};
const searchBooks = async (req, res) => {
    try {
        const { title } = req.query; // Get the title from the query parameters
        const books = await Book.find({ bookTitle: { $regex: title, $options: 'i' } }); // Case-insensitive search
        res.status(200).send(books);
    } catch (error) {
        console.error("Error searching books", error);
        res.status(500).send({ message: "Failed to search books" });
    }
};



module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    deleteABook,
    getOtherBooks,
    searchBooks
  
}