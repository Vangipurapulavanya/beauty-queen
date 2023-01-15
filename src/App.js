import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Account from "./components/Account/Account";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import Skin from "./components/Products/Skin/Skin";
import Hair from "./components/Products/Hair/Hair";
import Body from "./components/Products/Body/Body";
import Description from "./components/Description/Description";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/aboutus" element={<About />}></Route>
        <Route exact path="/shop" element={<Shop />}></Route>
        <Route exact path="/skin" element={<Skin/>}></Route>
        <Route exact path="/hair" element={<Hair/>}></Route>
        <Route exact path="/body" element={<Body/>}></Route>
        <Route exact path ="/cart" element={<Cart/>}></Route>
        <Route exact path="/account" element={<Account/>}></Route>
      </Routes>
      <Description/>
      <Footer/>
    </Router>
  );
}

export default App;
