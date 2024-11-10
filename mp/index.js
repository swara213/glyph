




// const express = require('express')
// const app = express()
// const port = process.env.PORT || 5009 ; 
// const cors = require('cors') ; 



// //MIDDLEWARE 

// app.use(cors()) ; 
// app.use(express.json()) ; 




// //password : PgxszCpEX8cYrPG6

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// //mongodb config

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = "mongodb+srv://mern_book-store:PgxszCpEX8cYrPG6@cluster0.ik42h.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect( );

//     //create collection for database 
//     const booksCollection  = client.db("book-store").collection("books") ; 

//     //inserting a book to db : post method 
//     app.post("/upload-book", async (req, res) => {
//       console.log("Received POST request with data:", req.body);
//       try {
//         const data = req.body;  
//         const result = await booksCollection.insertOne(data);
//         res.status(201).json(result); // Respond with the inserted result
//       } catch (error) {
//         console.error("Error inserting data:", error); // Log the error
//         res.status(500).json({ error: "Internal Server Error" }); // Send JSON error response
//       }
//     });

//     //get all books from database 
//     app.get("/all-books" , async(req,res) => {
//       const books = booksCollection.find();
//       const result = await books.toArray() ; 
//       res.send(result) ; 
//     })


    
    
//     //update books
//     app.patch("/book/:id" , async(req,res) =>{
//       const id = req.params.id ; 
//       //console.log(id) ; 
//       const updateBookData = req.body ; 
//       const filter = {_id: new ObjectId(id)}
//       const options = { upsert: true} ; 

//       const updateDoc = {
//         $set : {
//           ...updateBookData
//         }
//       }


//     //update
//     const result = await booksCollection.updateOne(filter , updateDoc , options) 
//     res.send(result) ; 

//     }); 

//     //delete
//     app.delete("/book/:id" , async(req,res) =>{
//       const id = req.params.id;
//       const filter = {_id: new ObjectId(id)} ; 
//       const result = await booksCollection.deleteOne(filter) ; 
//       res.send(result) ; 
//     })

    

//     app.get("/books-except/:id", async (req, res) => {
//       const id = req.params.id;

//       try {
//         // Use aggregation to find random books excluding the current one
//         const books = await booksCollection.aggregate([
//           { $match: { _id: { $ne: new ObjectId(id) } } }, // Exclude the current book
//           { $sample: { size: 4 } }                        // Randomly select 4 books
//         ]).toArray();

//         res.status(200).json(books);
//       } catch (error) {
//         console.error("Error fetching random books:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     //find by category 
//     // app.get("/all-books" , async(req,res) => {
//     //   let query = {} ; 
//     //   if(req.query?.category){
//     //     query = {category: req.query.category}
//     //   } 
//     //   const result = await booksCollection.find(query).toArray() ; 
//     //   res.send(result) ; 
//     // })

//     app.get("/book/:id" , async(req,res) =>{
//       const id =req.params.id;
//       const filter = {_id:new ObjectId(id)};
//       const result =  await booksCollection.findOne(filter) ; 
//       res.send(result) ;
//     })
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const express = require('express')
// const app = express()
// const port = process.env.PORT || 5008 ; 
// const cors = require('cors') ; 



// //MIDDLEWARE 

// app.use(cors()) ; 
// app.use(express.json()) ; 




// //password : PgxszCpEX8cYrPG6

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// //mongodb config

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = "mongodb+srv://mern_book-store:PgxszCpEX8cYrPG6@cluster0.ik42h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect( );

//     //create collection for database 
//     const booksCollection  = client.db("BookInventory").collection("books") ; 

//     //inserting a book to db : post method 
//     app.post("/upload-book", async (req, res) => {
//       console.log("Received POST request with data:", req.body);
//       try {
//         const data = req.body;  
//         const result = await booksCollection.insertOne(data);
//         res.status(201).json(result); // Respond with the inserted result
//       } catch (error) {
//         console.error("Error inserting data:", error); // Log the error
//         res.status(500).json({ error: "Internal Server Error" }); // Send JSON error response
//       }
//     });

//     //get all books from database 
//     app.get("/all-books" , async(req,res) => {
//       const books = booksCollection.find();
//       const result = await books.toArray() ; 
//       res.send(result) ; 
//     })


    
    
//     //update books
//     app.patch("/book/:id" , async(req,res) =>{
//       const id = req.params.id ; 
//       //console.log(id) ; 
//       const updateBookData = req.body ; 
//       const filter = {_id: new ObjectId(id)}
//       const options = { upsert: true} ; 

//       const updateDoc = {
//         $set : {
//           ...updateBookData
//         }
//       }


//     //update
//     const result = await booksCollection.updateOne(filter , updateDoc , options) 
//     res.send(result) ; 

//     }); 

//     //delete
//     app.delete("/book/:id" , async(req,res) =>{
//       const id = req.params.id;
//       const filter = {_id: new ObjectId(id)} ; 
//       const result = await booksCollection.deleteOne(filter) ; 
//       res.send(result) ; 
//     })

    

//     app.get("/books-except/:id", async (req, res) => {
//       const id = req.params.id;

//       try {
//         // Use aggregation to find random books excluding the current one
//         const books = await booksCollection.aggregate([
//           { $match: { _id: { $ne: new ObjectId(id) } } }, // Exclude the current book
//           { $sample: { size: 4 } }                        // Randomly select 4 books
//         ]).toArray();

//         res.status(200).json(books);
//       } catch (error) {
//         console.error("Error fetching random books:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     //find by category 
//     // app.get("/all-books" , async(req,res) => {
//     //   let query = {} ; 
//     //   if(req.query?.category){
//     //     query = {category: req.query.category}
//     //   } 
//     //   const result = await booksCollection.find(query).toArray() ; 
//     //   res.send(result) ; 
//     // })

//     app.get("/book/:id" , async(req,res) =>{
//       const id =req.params.id;
//       const filter = {_id:new ObjectId(id)};
//       const result =  await booksCollection.findOne(filter) ; 
//       res.send(result) ;
//     })
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 5009;
require('dotenv').config()

// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://book-app-frontend-tau.vercel.app'],
    credentials: true
}))

// routes
const bookRoutes = require('./src/books/book.route');
const userRoutes = require('./src/users/user.route');
const orderRoutes = require("./src/orders/order.route")
// const orderRoutes = require("./src/orders/order.route")
app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)


// app.use("/api/orders", orderRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

