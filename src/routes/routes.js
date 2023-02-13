import { createBrowserRouter } from "react-router-dom";
import ForgetPass from "../components/Authentication/ForgetPass";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import CompletedTasks from "../components/Home/CompletedTasks/CompletedTasks";
import MainHome from "../components/Home/MainHome/MainHome";
import People from "../components/Home/People/People";
import RemainingTasks from "../components/Home/RemainingTasks/RemainingTasks";
import Statistics from "../components/Home/Statistics/Statistics";
import Profile from "../components/Profile/Profile";
import Settings from "../components/Settings/Settings";
import HomeLayout from "../layouts/HomeLayout";
import MainLayout from "../layouts/MainLayout";
import ProjectsLayout from "../layouts/ProjectsLayout";
import TeamsLayout from "../layouts/TeamsLayout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
                children: [
                    {
                        path: '/',
                        element: <MainHome></MainHome>
                    },
                    {
                        path: '/statistics',
                        element: <Statistics></Statistics>
                    },
                    {
                        path: '/peoples',
                        element: <People></People>
                    },
                    {
                        path: '/completed-tasks',
                        element: <CompletedTasks></CompletedTasks>
                    },
                    {
                        path: '/remaining-tasks',
                        element: <RemainingTasks></RemainingTasks>
                    },
                    {
                        path: '/settings',
                        element: <Settings></Settings>
                    },
                    {
                        path: '/profile',
                        element: <Profile></Profile>
                    },
                ]
            },
            {
                path: '/projects',
                element: <ProjectsLayout></ProjectsLayout>
            },
            {
                path: '/teams',
                element: <TeamsLayout></TeamsLayout>
            },
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'signup',
        element: <Signup></Signup>
    },
    {
        path: 'signup',
        element: <ForgetPass></ForgetPass>
    },
    {
        path: '*',
        element: <h1>404 Error</h1>
    }
])