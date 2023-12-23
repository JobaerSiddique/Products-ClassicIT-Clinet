import React from 'react';
import Navbar from '../../Pages/SharedPage/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/SharedPage/Footer';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;