import React, { useContext } from 'react';
import ProductCart from '../components/productCart';  // Asegúrate de importar ProductCart
import { ProductContext } from '../components/productContext'; 

const Home = () => {
  const products = useContext(ProductContext); 

  return (
    <div>
      <h1 className="text-3xl my-5 text-center">LIST PRODUCTS</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.length > 0 ? (
          products.map((product) => (
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