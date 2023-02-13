import React from 'react';
import notification_icon from '../../images/Tick Square.svg'

const Notification = ({ handleNotification }) => {
    return (
        <div>
            <div className="notification-background">
                <div className="arrow-up"></div>
                <div className="notification-main-body">
                    <div className="notification-contents">
                        <div className="notification-heading">
                            <h2 className='title'>Notifications</h2>
                            <p className='mark' onClick={() => handleNotification()}>mark all as read</p>
                        </div>

                        <div className="single-notification">
                            <div className="icon-message">
                                <div className="icon">
                                    <img src={notification_icon} alt="" />
                                </div>
                                <div className="message">
                                    <h3 className="message-title">Lorem, ipsum dolor.</h3>
                                    <p className="message-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                                </div>
                            </div>
                            <div className="times-ago">
                                <p className='time'>3m</p>
                            </div>
                        </div>
                        <div className="single-notification">
                            <div className="icon-message">
                                <div className="icon">
                                    <img src={notification_icon} alt="" />
                                </div>
                                <div className="message">
                                    <h3 className="message-title">Lorem, ipsum dolor.</h3>
                                    <p className="message-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                                </div>
                            </div>
                            <div className="times-ago">
                                <p className='time'>3m</p>
                            </div>
                        </div>
                        <div className="single-notification">
                            <div className="icon-message">
                                <div className="icon">
                                    <img src={notification_icon} alt="" />
                                </div>
                                <div className="message">
                                    <h3 className="message-title">Lorem, ipsum dolor.</h3>
                                    <p className="message-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                                </div>
                            </div>
                            <div className="times-ago">
                                <p className='time'>3m</p>
                            </div>
                        </div>
                        <div className="single-notification">
                            <div className="icon-message">
                                <div className="icon">
                                    <img src={notification_icon} alt="" />
                                </div>
                                <div className="message">
                                    <h3 className="message-title">Lorem, ipsum dolor.</h3>
                                    <p className="message-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                                </div>
                            </div>
                            <div className="times-ago">
                                <p className='time'>3m</p>
                            </div>
                        </div>
                        <div className="single-notification">
                            <div className="icon-message">
                                <div className="icon">
                                    <img src={notification_icon} alt="" />
                                </div>
                                <div className="message">
                                    <h3 className="message-title">Lorem, ipsum dolor.</h3>
                                    <p className="message-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                                </div>
                            </div>
                            <div className="times-ago">
                                <p className='time'>3m</p>
                            </div>
                        </div>
                        <div className="single-notification">
                            <div className="icon-message">
                                <div className="icon">
                                    <img src={notification_icon} alt="" />
                                </div>
                                <div className="message">
                                    <h3 className="message-title">Lorem, ipsum dolor.</h3>
                                    <p className="message-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                                </div>
                            </div>
                            <div className="times-ago">
                                <p className='time'>3m</p>
                            </div>
                        </div>
                        <div className="single-notification">
                            <div className="icon-message">
                                <div className="icon">
                                    <img src={notification_icon} alt="" />
                                </div>
                                <div className="message">
                                    <h3 className="message-title">Lorem, ipsum dolor.</h3>
                                    <p className="message-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                                </div>
                            </div>
                            <div className="times-ago">
                                <p className='time'>3m</p>
                            </div>
                        </div>
                        <div className="single-notification">
                            <div className="icon-message">
                                <div className="icon">
                                    <img src={notification_icon} alt="" />
                                </div>
                                <div className="message">
                                    <h3 className="message-title">Lorem, ipsum dolor.</h3>
                                    <p className="message-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                                </div>
                            </div>
                            <div className="times-ago">
                                <p className='time'>3m</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Notification;