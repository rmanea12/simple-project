import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import NewProduct from "./components/Products/NewProduct";
import ProductList from "./components/Products/ProductList";
import "./App.css";

function App() {
  const [loadedProducts, setLoadedProducts] = useState([]);

  //EXPLAIN WHAT IS USEFFECT
  useEffect(() => {
    //TODO 3 -- CREATE A RESPONSE CONSTANT AND FETCH DATA, ALSO JSON IT AND ADD IT TO A RESPONSEDATA CONSTANT AND SET THE LOADED PRODUCTS
    //WITH THE RESPONSEDATA
    const fetchProducts = async () => {};

    fetchProducts();
  }, []);

  const addProductHandler = async (productName, productPrice) => {
    try {
      const newProduct = {
        title: productName,
        price: +productPrice,
      };

      //TODO 4 -- FETCH THE PRODUCT ROUTE TO CREATE A PRODUCT WITH A POST METHOD

      const responseData = await response.json();

      setLoadedProducts((prevProducts) => {
        return prevProducts.concat({
          ...newProduct,
          id: responseData.product.id,
        });
      });
    } catch (error) {
      alert(error.message || "Something went wrong!");
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <NewProduct onAddProduct={addProductHandler} />
        //YOU NEED TO ADD A COMPONENT HERE, WHAT IS IT?
      </main>
    </React.Fragment>
  );
}

export default App;
