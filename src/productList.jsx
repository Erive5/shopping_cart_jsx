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
              data={product}   // Pasas todo el producto como prop
            />
          ))}
        </div>
      )}
    </div>
  );
}

//   return (
//     <div>
//       {productList.length > 0 && (
//         <div>
//           {productList.map((product) => {
//             return (
//               <div
//                 key={product.id}
//                 className="bg-white p-5 rounded-xl shadow-sm"
//               >
//                 <h1 className="text-2xl py-3 text-center font-medium">
//                   {product.title}
//                 </h1>
//                 <Link to={product.id}>
//                   <img
//                     className="w-full h-80 object-cover object-top drop-shadow-sm[0_80px_30px_#0007]"
//                     src={product.image}
//                     alt={product.name}
//                   />
//                 </Link>
//                 <h2>$ {product.price}</h2>
//                 <p>Product id : {product.id}</p>
//                 <p>Category : {product.category}</p>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

export default ProductList;
