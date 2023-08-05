import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  );
}

export default App;
