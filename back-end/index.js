const express = require("express");
// const cors = require("cors"); - is this needed?
const app = express();

// app.use(cors()); // Enable CORS for all routes - is this needed?

// Example route
app.get("/api/data", (req, res) => {
  // Fetch data from your database or any source
  const data = { message: "Hello from Express API!" };
  res.json(data);
});

// ... other routes and configurations ...

app.listen(3001, () => {
  console.log("Express API is running on port 3001");
});
