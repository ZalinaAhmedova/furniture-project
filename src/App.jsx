import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shoppingcart" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
