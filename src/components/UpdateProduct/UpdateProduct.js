import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

   

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                
            })
    }, []);
    
    
    const handleName =(e) =>{
     const name= e.target.value;
       const updateProduct = {
           name: name,
           prices: product?.prices,
           quantity: product?.quantity
       }
       setProduct(updateProduct);
    }
    const handlePrices=(e) =>{
     const prices = e.target.value;
       const updateProduct = {
           name: product.name,
           prices: prices,
           quantity: product?.quantity
       }
       setProduct(updateProduct);
    }
    const handleQuantity =(e) =>{
     const quantity = e.target.value;
       const updateProduct = {
           name: product.name,
           prices: product?.prices,
           quantity: quantity
       }
       setProduct(updateProduct);
    }


    const handleUpdate = (e) => {
        fetch('http://localhost:5000/update',{
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({product})
        }).then(res => res.json())
        .then(data => setProduct(data))
       
        e.preventDefault();
    }
    return (
        <div>
            <h1>This is updated product</h1>
            <p>{id}</p>
            <h2>{product?.name}</h2>

            <form onSubmit={handleUpdate}>
                <input type="text" onChange = {handleName} value={product?.name} />
                <input type="number" onChange ={handlePrices} value={product?.prices} />
                <input type="number" onChange={handleQuantity} value={product?.quantity} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;