import React, { useEffect, useState } from 'react';
import ProductCart from '../components/productCart';  // Asegúrate de importar ProductCart

const Home = () => {
  const [productList, setProductList] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProductList(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl my-5">List Products</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {productList.length > 0 ? (
          productList.map((product) => (
            <ProductCart key={product.id} data={product} />  // Pasar producto como prop
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Home;