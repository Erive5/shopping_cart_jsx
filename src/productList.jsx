import React, { useEffect, useState } from "react";

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
          {productList.map((product) => {
            return (
              <div key={product.id}>
                <h1>{product.title}</h1>
                <img className="w-14" src={product.image} alt={product.name} />
                <h2>$ {product.price}</h2>
                <p>Product id : {product.id}</p>
                <p>{product.description}</p>
                <br />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductList;
