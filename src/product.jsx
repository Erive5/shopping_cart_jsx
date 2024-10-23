import React, { useState, useEffect } from 'react';


function Product() {

    const[product, setProduct] = useState();
    const[id, setId] = useState(1);

    const handlePrevious = () => {
        setId(id - 1)
    }
    const handleNext = () => {
        setId(id + 1)
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then(data=>{
                setProduct(data); 
            })
    }, [id])

    
  return (
    product && 
    <div>
       <h1>{product.title}</h1>
       <img className='w-14' src={product.image} alt={product.name}/> 
       <h2>$ {product.price}</h2>
       <p>Product id : {product.id}</p>
       <p>{product.description}</p>
       <br />
       { id > 1 ? <button className ='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2' onClick={handlePrevious}><i class="fa-solid fa-arrow-left"></i></button> :  <button disabled className ='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2' onClick={handlePrevious}><i class="fa-solid fa-arrow-left"></i></button>
       }
        { id < 20 ? <button className ='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2' onClick={handleNext}><i class="fa-solid fa-arrow-right"></i></button> :  <button disabled className ='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2' onClick={handlePrevious}><i class="fa-solid fa-arrow-right"></i></button>
       }
    </div>
  )
}

export default Product