import "./App.css";
import AboutUs from "./LandingComps/AboutUs";
import Footer from "./LandingComps/Footer";
import Home from "./LandingComps/Home";
import Navbar from "./LandingComps/Navbar";
import Products from "./LandingComps/Products";
import Purchase from "./LandingComps/Purchase";
import Login from "./LoginComponent/Login";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Purchase />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
