import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { incrementCartItem } from "../store/cartSlice";
import { addCartItem } from "../store/cartSlice";
import GoodsCatalogItem from "./GoodsCatalogItem";
import { PRODUCTS } from "../data/productsData";

const GoodsCatalogContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.isTileView ? "repeat(auto-fill, minmax(250px, 1fr))" : "none"};
  grid-template-rows: ${(props) =>
    props.isListView ? "repeat(auto-fill, minmax(150px, 1fr))" : "none"};
  padding: ${(props) => (props.isTileView ? "10px" : "0")};
`;

function GoodsCatalog({ category, viewMode, searchCatalogValue }) {
  const [addedId, setAddedId] = useState([]);
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleIncrementButton = (_id) => {
    dispatch(incrementCartItem(_id));
  };

  const addProductHandler = (product, productId) => {
    let isCartIncludesItem = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        isCartIncludesItem = true;
        handleIncrementButton(productId);
      }
    });
    !isCartIncludesItem && dispatch(addCartItem(product));
    setAddedId(productId);
  };

  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const filter = () => {
    setFilteredProducts(
      category === "All Categories"
        ? PRODUCTS
        : PRODUCTS.filter(
            (product) =>
              product.category === category || product.subCategory === category
          )
    );
  };

  const search = () => {
    setFilteredProducts(
      PRODUCTS.filter((product) => {
        const fullProductName = (product.name + product.brand).toLowerCase();
        return searchCatalogValue
          ? fullProductName.includes(searchCatalogValue.toLowerCase())
          : product;
      })
    );
  };

  useEffect(() => {
    filter();
  }, [category]);

  useEffect(() => {
    search();
  }, [searchCatalogValue]);

  // useEffect(() => {
  //   setFilteredProducts(
  //     PRODUCTS.filter((product) => {
  //       const fullProductName = (product.name + product.brand).toLowerCase();
  //       return searchCatalogValue
  //         ? fullProductName.includes(searchCatalogValue.toLowerCase())
  //         : product;
  //     })
  //   );
  // }, [searchCatalogValue]);

  return (
    <GoodsCatalogContainer
      isTileView={viewMode === "tile"}
      isListView={viewMode === "list"}
    >
      {filteredProducts.map((product) => (
        <GoodsCatalogItem
          isAdded={addedId === product._id}
          key={product._id}
          item={product}
          isListView={viewMode === "list"}
          onClickButton={() => addProductHandler(product, product._id)}
        />
      ))}
    </GoodsCatalogContainer>
  );
}

export default GoodsCatalog;
