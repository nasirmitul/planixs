import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Notification from '../Notification/Notification';

const RightSection = () => {
    const [activeNotification, setActiveNotification] = useState(false);

    const handleNotification = () => {
        setActiveNotification(!activeNotification)
    }

    return (
        <div className='right-side-layout'>

            <div className="right-heading">
                <div className="profile">
                    <Link to='/profile'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_14_495" maskUnits="userSpaceOnUse" x="4" y="14" width="16" height="8">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 14.4961H19.8399V21.8701H4V14.4961Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_14_495)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9209 15.9961C7.65988 15.9961 5.49988 16.7281 5.49988 18.1731C5.49988 19.6311 7.65988 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.96188 21.8701 3.99988 21.8701 3.99988 18.1731C3.99988 14.8771 8.52088 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z" fill="#125AFF" />
                            </g>
                            <mask id="mask1_14_495" maskUnits="userSpaceOnUse" x="6" y="2" width="12" height="11">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.60986 2.00009H17.2299V12.6187H6.60986V2.00009Z" fill="white" />
                            </mask>
                            <g mask="url(#mask1_14_495)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9209 3.42769C9.77989 3.42769 8.03789 5.16869 8.03789 7.30969C8.03089 9.4437 9.75989 11.1837 11.8919 11.1917L11.9209 11.9057V11.1917C14.0609 11.1917 15.8019 9.44969 15.8019 7.30969C15.8019 5.16869 14.0609 3.42769 11.9209 3.42769ZM11.9209 12.6187H11.8889C8.9669 12.6097 6.59989 10.2267 6.60989 7.30669C6.60989 4.3817 8.99189 1.99969 11.9209 1.99969C14.8489 1.99969 17.2299 4.38169 17.2299 7.30969C17.2299 10.2377 14.8489 12.6187 11.9209 12.6187Z" fill="#125AFF" />
                            </g>
                        </svg>
                    </Link>
                </div>

                <div className="notification" onClick={() => handleNotification()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_14_499" maskUnits="userSpaceOnUse" x="3" y="1" width="19" height="18">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1H21.4969V18.348H3V1Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_14_499)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.247 2.5C8.75201 2.5 6.31601 5.238 6.31601 7.695C6.31601 9.774 5.73901 10.735 5.22901 11.583C4.82001 12.264 4.49701 12.802 4.49701 13.971C4.66401 15.857 5.90901 16.848 12.247 16.848C18.55 16.848 19.834 15.813 20 13.906C19.997 12.802 19.674 12.264 19.265 11.583C18.755 10.735 18.178 9.774 18.178 7.695C18.178 5.238 15.742 2.5 12.247 2.5ZM12.247 18.348C7.57101 18.348 3.34501 18.018 3.00001 14.035C2.99701 12.387 3.50001 11.549 3.94401 10.811C4.39301 10.063 4.81601 9.358 4.81601 7.695C4.81601 4.462 7.80201 1 12.247 1C16.692 1 19.678 4.462 19.678 7.695C19.678 9.358 20.101 10.063 20.55 10.811C20.994 11.549 21.497 12.387 21.497 13.971C21.148 18.018 16.923 18.348 12.247 18.348Z" fill="#125AFF" />
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1983 22.5H12.1963C11.0753 22.499 10.0143 22.005 9.20927 21.108C8.93227 20.801 8.95727 20.326 9.26527 20.05C9.57327 19.772 10.0473 19.797 10.3243 20.106C10.8423 20.683 11.5073 21 12.1973 21H12.1983C12.8913 21 13.5593 20.683 14.0783 20.105C14.3563 19.798 14.8303 19.773 15.1373 20.05C15.4453 20.327 15.4703 20.802 15.1933 21.109C14.3853 22.006 13.3223 22.5 12.1983 22.5Z" fill="#125AFF" />
                    </svg>

                </div>
            </div>

            {
                activeNotification && <Notification handleNotification={handleNotification}></Notification>
            }

            <div className="progress-bar">
                <div className="progress-outside">
                    <div className="progress-circle">
                        <div className="progress-data">
                            <p className='daily-plan'>Daily Plan</p>
                            <h1 className="percentage">70%</h1>
                            <p className="completed">7/10 completed</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RightSection;