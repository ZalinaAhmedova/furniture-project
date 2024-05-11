import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItem,
  decrementCartItem,
  incrementCartItem,
} from "../store/cartSlice";
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
  const cartItems = useSelector((state) => state.cart.items);
  const data = PRODUCTS;
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();

  const handleIncrementButton = (_id) => {
    dispatch(incrementCartItem(_id));
  };

  const handleDecrementButton = (_id) => {
    dispatch(decrementCartItem(_id));
  };

  const handleRemoveItem = (_id) => {
    dispatch(removeCartItem(_id));
  };

  const checkPresenceInCart = (id) => {
    let checkId = false;
    cartItems.forEach((item) => {
      if (item._id === id) checkId = true;
    });
    return checkId;
  };

  const checkQuantityInCart = (id) => {
    let checkQuantity = false;
    cartItems.forEach((item) => {
      if (item._id === id && item.quantity === 1) checkQuantity = true;
    });
    return checkQuantity;
  };

  const addProductHandler = (product) => {
    if (checkPresenceInCart(product._id)) {
      handleIncrementButton(product._id);
    }
    !checkPresenceInCart(product._id) && dispatch(addCartItem(product));
  };

  const decreaseProductHandler = (product) => {
    if (checkQuantityInCart(product._id)) {
      handleRemoveItem(product._id);
    }
    !checkQuantityInCart(product._id) && handleDecrementButton(product._id);
  };

  const sortingAndFilteringData = (category, searchCatalogValue) => {
    return data.filter((product) => {
      const fullProductName = (product.name + product.brand).toLowerCase();
      return (
        fullProductName.includes(searchCatalogValue.toLowerCase()) &&
        (category !== "All Categories"
          ? product.category === category || product.subCategory === category
          : true)
      );
    });
  };

  useEffect(() => {
    const filteredData = sortingAndFilteringData(category, searchCatalogValue);
    setFilteredProducts(filteredData);
  }, [category, searchCatalogValue, data]);

  return (
    <GoodsCatalogContainer
      isTileView={viewMode === "tile"}
      isListView={viewMode === "list"}
    >
      {filteredProducts.map((product) => (
        <GoodsCatalogItem
          isAdded={checkPresenceInCart(product._id)}
          key={product._id}
          item={product}
          isListView={viewMode === "list"}
          onClickAddButton={() => addProductHandler(product)}
          onClickDecreaseButton={() => decreaseProductHandler(product)}
        />
      ))}
    </GoodsCatalogContainer>
  );
}

export default GoodsCatalog;
