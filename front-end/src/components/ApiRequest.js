import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <p>This is the message:</p>
      <p>{data.message}</p>
    </div>
  );
}

export default App;
