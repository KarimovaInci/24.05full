import {BrowserRouter, Route, Routes} from "react-router-dom"
import Add from "./pages/Add/Add";
import Home from "./pages/Home/Home"
import Detail from "./pages/Detail/Detail";
import Basket from "./pages/Basket/Basket"
import Wishlist from "./pages/Wishlist/Wishlist"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/:id" element={<Detail/>}/>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/wish" element={<Wishlist/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
