import React, { useRef } from 'react';

const AddProduct = () => {
    const productNameRef = useRef();
    const productPricesRef = useRef();
    const productQuantityRef = useRef();

    const handleAddProduct = (e) =>{

        const name = productNameRef.current.value;
        const prices = productPricesRef.current.value;
        const quantity = productQuantityRef.current.value;

        const newAddProduct = {name, prices, quantity}


        fetch('http://localhost:5000/addProduct', {
            method: "POST",
            headers: {
                'Content-type':"application/json"
            },
            body: JSON.stringify({newAddProduct})
        }).then(res =>res.json())
        .then(data => {
           if(data.insertedId){
               alert("successfully added product");
               e.target.reset();
           }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h1>please Add Product</h1>
            <form onSubmit={handleAddProduct}>
                <input type="text" ref={productNameRef} placeholder="Enter Product Name" />
                <input type="number" ref={productPricesRef} placeholder="Enter product prices"/>
                <input type="number" ref={productQuantityRef} placeholder="Enter product quantity"/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;