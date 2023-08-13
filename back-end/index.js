const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//connect and give it a database name
mongoose
  .connect("mongodb://127.0.0.1:27017/posting-english-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch(console.error);

app.listen(3001, () =>
  console.log("Server started on port 3001")
);

// everything below is from other tutorials

// db uri
// const uri =
//   "mongodb+srv://robnickson-posting-english:TAVnyd8TDwn2kclC@cluster-posting-english.fro2rth.mongodb.net/?retryWrites=true&w=majority";

// connect to mongodb
// async function connect() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error(error);
//   }
// }
// connect();

// Example route
// app.get("/api/data", (req, res) => {
// Fetch data from your database or any source
//   const data = {
//     message: "Hello from Express API!",
//     name: "A school somewhere",
//     location: "Daejean",
//     salary: "3.3 million won",
//   };
//   res.json(data);
// });

// ... other routes and configurations ...
// app.listen(3001, () => {
//   console.log("Express API is running on port 3001");
// });
