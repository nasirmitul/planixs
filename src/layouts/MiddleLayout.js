import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavigation from '../Navigations/TopNavigation';

const MiddleLayout = () => {
    return (
        <div>
            <TopNavigation></TopNavigation>
            <Outlet></Outlet>
        </div>
    );
};

export default MiddleLayout;