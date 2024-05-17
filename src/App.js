import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import AddProduct from "./NewProduct"
import Category   from "./Category";
import Cart       from "./Cart";
import Home       from "./Home";
import Layout     from "./Layout";
import NotFound   from "./NotFound";
import Privacy    from "./Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="*" element={<NotFound />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
