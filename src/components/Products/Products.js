import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] =useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res =>res.json())
        .then(data => setProducts(data))
    } ,[isLoading])

    const handleProductDelete = (id) =>{
        fetch(`http://localhost:5000/product/${id}`,{
            method: "DELETE",
            headers: {
                'Content-Type' : "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setIsLoading(!isLoading);
            }
        })
    }
    return (
        <div>
            <h1>This is Product Page</h1>
            <p>{products.length}</p>
            {
                products.map(product =><p
                     key={product._id}>Name: {product.name} Price: {product.prices} 
                     <Link to={`/product/${product._id}`}><button>Update</button></Link>
                     <button onClick ={()=>handleProductDelete(product._id)}>X</button>
                     </p>)
            }
        </div>
    );
};

export default Products;