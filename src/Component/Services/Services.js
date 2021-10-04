import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Serv from '../Serv/Serv';
import './Services.css'

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./servicex.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <>
            <Header></Header>
            <div className="background-style py-3">
                <div>
                    <h2 className="text-white py-2">Our Services aree</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        service.map(serv => <Serv serv={serv}></Serv>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Services;