import React from 'react';
import RightSection from '../components/RightSection/RightSection';
import SideNavigation from '../Navigations/SideNavigation';
import MiddleLayout from './MiddleLayout';

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <div className="side-navigation">
                <SideNavigation></SideNavigation>
            </div>
            <div className="middle-section">
                <MiddleLayout></MiddleLayout>
            </div>
            <div className="right-section">
                <RightSection></RightSection>
            </div>
        </div>
    );
};

export default MainLayout;