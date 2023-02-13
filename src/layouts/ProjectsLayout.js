import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectsNavigation from '../Navigations/ProjectsNavigation';

const ProjectsLayout = () => {
    return (
        <div>
            <ProjectsNavigation></ProjectsNavigation>
            <div className="home-contents">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProjectsLayout;