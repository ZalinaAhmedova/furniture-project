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
  const cartItems = useSelector((state) => state.cart.items);
  const [data, setData] = useState(PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [addedIds, setAddedIds] = useState([]);

  const dispatch = useDispatch();

  const handleIncrementButton = (_id) => {
    dispatch(incrementCartItem(_id));
  };

  const addProductHandler = (product) => {
    let isCartIncludesItem = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        isCartIncludesItem = true;
        handleIncrementButton(product._id);
      }
    });
    !isCartIncludesItem && dispatch(addCartItem(product));
    setAddedIds((prev) => [...prev, product._id]);
  };

  const handleSortAndFilteredData = (category, searchCatalogValue) => {
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
    const data = PRODUCTS;
    setData(data);
  }, [PRODUCTS]);

  useEffect(() => {
    const data = handleSortAndFilteredData(category, searchCatalogValue);
    setFilteredProducts(data);
  }, [category, searchCatalogValue, data]);

  return (
    <GoodsCatalogContainer
      isTileView={viewMode === "tile"}
      isListView={viewMode === "list"}
    >
      {filteredProducts.map((product) => (
        <GoodsCatalogItem
          isAdded={addedIds.includes(product._id)}
          key={product._id}
          item={product}
          isListView={viewMode === "list"}
          onClickButton={() => addProductHandler(product)}
        />
      ))}
    </GoodsCatalogContainer>
  );
}

export default GoodsCatalog;
