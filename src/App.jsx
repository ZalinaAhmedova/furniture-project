import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage"
import Shoppage from "./pages/Shoppage";
import Shoppingcartpage from "./pages/Shoppingcartpage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="shop" element={<Shoppage />}></Route>
          <Route path="shoppingcart" element={<Shoppingcartpage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
