import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { IconContext } from 'react-icons';
import { GiTakeMyMoney } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';

import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    SET_LOGOUT_USER,
    SET_PAGE,
    selectIsLoggedIn,
    selectPage,
} from '../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoggedInRedux = useSelector(selectIsLoggedIn);
    const pageRedux = useSelector(selectPage)

    const [navModal, setNavModal] = useState(false);
    const [modalLinkHeight, setModalLinkHeight] = useState();
    const [windowWidth, setWindowWidth] = useState();

    const logoutUser = () => {
        dispatch(SET_LOGOUT_USER());
        navigate('/');
        toast.success("Logout Successful, Now Please Don't Go And Gamble :)");
    };

    const navbarNavigate = (curPage, link) => {
        dispatch(SET_PAGE(curPage))
        navigate(`/${link}`)
    }

    useEffect(() => {
        if (navModal) {
            const handleWindowResize = () => {
                setWindowWidth(window.innerWidth);

                if (windowWidth > 767) {
                    setNavModal(false);
                }
            };

            window.addEventListener('resize', handleWindowResize);

            return () => {
                window.removeEventListener('resize', handleWindowResize);
            };
        }
    }, [window.innerWidth]);

    return (
        <>
            {navModal ? (
                <div className="h-[100vh] w-[100vw] mt-[5rem] mb-[10rem] flex justify-center items-center z-[100]">
                    <IconContext.Provider value={{ size: '3rem' }}>
                        <button
                            className="absolute top-0 left-0 text-red-600"
                            onClick={() => setNavModal(false)}
                        >
                            <IoMdCloseCircle />
                        </button>
                    </IconContext.Provider>

                    <div className="h-[80vh] w-[80vw] bg-gradient-to-b from-brilliantGreen to-lightGreen text-dark rounded-xl flex flex-col">
                        <div
                            className="h-1/6 flex justify-center items-center modal-link"
                            onClick={() => navigate('/')}
                        >
                            <h3>Home</h3>
                        </div>
                        <div
                            className="h-1/6 flex justify-center items-center modal-link"
                            onClick={() => navigate('/games')}
                        >
                            <h3>Games</h3>
                        </div>
                        <div
                            className="h-1/6 flex justify-center items-center modal-link"
                            onClick={() => navigate('/about')}
                        >
                            <h3>About</h3>
                        </div>
                        <div
                            className="h-1/6 flex justify-center items-center modal-link"
                            onClick={() => navigate('/learn')}
                        >
                            <h3>Learn</h3>
                        </div>
                        <div className="h-1/6 flex justify-center items-center modal-link">
                            <h3>News</h3>
                        </div>
                        <div className="h-1/6 flex justify-center items-center">
                            <IconContext.Provider
                                value={{
                                    className: 'socials-sm',
                                    size: '2rem',
                                    color: 'rgb(79, 194, 157)',
                                }}
                            >
                                <div className="flex h-1/6 items-center gap-x-10">
                                    <FaTelegramPlane />
                                    <FaFacebook />
                                    <FaTwitter />
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            ) : (
                <nav className="h-[68px] pt-[1rem] flex justify-evenly items-center gap-10 xxl:gap-28 z-[10] md:pl-[16px] lg:mt-[1rem]">
                    <IconContext.Provider value={{ className: 'dropdown', size: '2rem' }}>
                        <div className={`ml-1 md:hidden ${navModal ? 'rotate' : ''}`}>
                            <GiHamburgerMenu onClick={() => setNavModal((prev) => !prev)} />
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: 'nav-logo', size: '2rem' }}>
                        <div className="flex h-full items-center">
                            <GiTakeMyMoney />
                            <h1 className="font-extrabold text-lightGreen cursor-pointer text-sm md:text-lg">
                                Gamble REHAB
                            </h1>
                        </div>
                    </IconContext.Provider>
                    <div className="hidden md:flex h-full items-center text-white font-light">
                        <h3 className={`${pageRedux === 'Home' ? 'linearGradientText1 font-bold' : ''} border-right`} onClick={() => navbarNavigate('Home', '')}>
                            Home
                        </h3>
                        <h3 className={`${pageRedux === 'Games' ? 'linearGradientText1 font-bold' : ''} border-right`} onClick={() => navbarNavigate('Games', 'games')}>
                            Games
                        </h3>
                        <h3 className={`${pageRedux === 'About' ? 'linearGradientText1 font-bold' : ''} border-right`} onClick={() => navbarNavigate('About', 'about')}>
                            About
                        </h3>
                        <h3 className={`${pageRedux === 'Learn' ? 'linearGradientText1 font-bold' : ''} border-right`} onClick={() => navbarNavigate('Learn', 'learn')}>
                            Learn
                        </h3>
                        <h3 className="border-unique">News</h3>
                        {!isLoggedInRedux ? (
                            <h3
                                className="border-fix font-light linearGradientText1 hover:text-white lg:hidden"
                                onClick={() => navigate('/login')}
                            >
                                Get Started
                            </h3>
                        ) : (
                            <h3
                                className="border-fix font-light text-red-500 hover:bg-red-600 rounded-sm lg:hidden"
                                onClick={() => logoutUser()}
                            >
                                Logout
                            </h3>
                        )}
                    </div>
                    <IconContext.Provider
                        value={{ className: 'socials', size: '2rem', color: 'white' }}
                    >
                        <div className="hidden xl:flex h-full items-center gap-x-10">
                            <FaTelegramPlane />
                            <FaFacebook />
                            <FaTwitter />
                        </div>
                    </IconContext.Provider>
                    {!isLoggedInRedux ? (
                        <div className="flex h-full items-center gone">
                            <button
                                className="nav-btn font-medium lg:font-bold p-1 mr-1 md:p-2 md:px-6 text-black"
                                onClick={() => navigate('/login')}
                            >
                                Get Started
                            </button>
                        </div>
                    ) : (
                        <div className="flex h-full items-center gone">
                            <button
                                className="bg-red-400 rounded-md font-medium lg:font-bold p-1 mr-1 md:p-2 md:px-6 text-black"
                                onClick={() => logoutUser()}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </nav>
            )}
            <span className="h-1/4 w-1/6 green_gradient absolute right-0 z-[1] "></span>
            <span className="h-1/3 w-1/5 darkGreen_gradient absolute right-0 z-[1]  "></span>
            <span className="h-1/2 w-1/4 white_gradient absolute right-0 z-[1]  "></span>
            <span className="h-1/6 w-1/4 darkerGreen_gradient absolute bottom-0 left-[-15%] z-[1]  "></span>
            <span className="h-1/6 w-1/3 white_gradient absolute bottom-0 left-[-15%] z-[1]  "></span>
            <span className="h-1/6 w-1/4 darkerGreen_gradient absolute bottom-[40%] left-[-10%] z-[1]  "></span>
        </>
    );
};

export default Navbar;
