import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import ProductCart from './ProductCart';  

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {productList.length > 0 && (
        <div>
          {productList.map((product) => (
            <ProductCart 
              key={product.id}
              data={product}  
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
