import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavigation from '../Navigations/HomeNavigation';

const HomeLayout = () => {
    return (
        <div>
            <HomeNavigation></HomeNavigation>
            <div className="home-contents">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default HomeLayout;