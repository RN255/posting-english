const express = require("express");
const app = express();

// Example route
app.get("/api/data", (req, res) => {
  // Fetch data from your database or any source
  const data = {
    message: "Hello from Express API!",
    name: "A school somewhere",
    location: "Daejean",
    salary: "3.3 million won",
  };
  res.json(data);
});

// ... other routes and configurations ...

app.listen(3001, () => {
  console.log("Express API is running on port 3001");
});
