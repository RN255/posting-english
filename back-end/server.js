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

// import schema
const Entry = require("./models/Entry");

// get entries
app.get("/entries", async (req, res) => {
  const entries = await Entry.find();

  res.json(entries);
});

// create a new entry
app.post("/entry/new", (req, res) => {
  const entry = new Entry({
    text: req.body.text,
  });
  entry.save();
  res.json(entry);
});

// delete an entry
app.delete("/entry/delete/:id", async (req, res) => {
  const result = await Entry.findByIdAndDelete(req.params.id);
  res.json(result);
});

// mark entry as complete
app.get("/entry/complete/:id", async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  entry.complete = !entry.complete;
  entry.save();
  res.json(entry);
});

app.listen(3001, () => console.log("Server started on port 3001"));
