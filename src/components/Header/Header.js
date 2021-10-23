import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to = '/products'>Products</Link>
            <Link to = '/addProduct'>Add Product</Link>
        </div>
    );
};

export default Header;