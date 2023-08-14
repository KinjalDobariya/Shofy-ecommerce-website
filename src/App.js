import './App.css';
import { Routes, Route } from "react-router-dom"
// import Home from './component/Home';
import Cart from './component/Cart/cart';
import Product from './component/Product/product';

function App() {
  return (
    <div>
      <Routes>

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Product />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
