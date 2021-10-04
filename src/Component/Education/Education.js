import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Product/Products';
import './Education.css'

const Education = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./education.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <Header></Header>
            <div className='background'>
                <div>
                    <h2 className="text-white py-3">Our Educations </h2>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        products.map(product => <Products product={product} ></Products>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default Education;