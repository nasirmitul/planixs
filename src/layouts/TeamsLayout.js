import React from 'react';
import { Outlet } from 'react-router-dom';
import TeamsNavigation from '../Navigations/TeamsNavigation';

const TeamsLayout = () => {
    return (
        <div>
            <TeamsNavigation></TeamsNavigation>
            <div className="home-contents">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default TeamsLayout;