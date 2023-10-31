import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsPersonCircle, BsPencilSquare, BsFillLockFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SET_LOGIN, SET_USER } from '../redux/features/auth/authSlice';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import { loginUser, logoutUser, registerUser } from '../services/authService';

const initialState = {
    email: '',
    password: '',
    name: '',
};

const Login1 = () => {
    // STATES
    const [imgHeight, setImgHeight] = useState();
    const [page, setPage] = useState('login');
    const [loginData, setLoginData] = useState(initialState);
    const { email, password, name } = loginData;
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    // NAV/DISPATCH
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // NON-FORM FXNS
    const getImageHeight = () => {
        const img = document.getElementById('login-img');
        setImgHeight(img.clientHeight);
    };

    // FORM-FXNS
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (loginData.email !== '' && loginData.password !== '') {
            if (page === 'login') {
                try {
                    const data = await loginUser(loginData);

                    if (data) {
                        toast.success('Logged-In Successfully!');
                        localStorage.setItem('name', data.name);
                        dispatch(SET_USER(data));
                        dispatch(SET_LOGIN(true));
                        navigate('/games');
                    }
                } catch (error) {
                    setIsLoading(false);
                    const message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    toast.error(message);
                }
            } else if (page === 'register') {
                try {
                    const data = await axios.post(
                        'http://localhost:5000/api/users/register',
                        loginData,
                        { withCredentials: true }
                    );

                    if (data.statusText === 'OK') {
                        toast.success('Registration Successful!');
                        localStorage.setItem('name', data.data.name);
                        dispatch(SET_USER(data));
                        dispatch(SET_LOGIN(true));
                    }
                } catch (error) {
                    setIsLoading(false);
                    const message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    toast.error(message);
                }
            } else {
            }
        } else {
            toast.error('Please fill out all fileds for login!');
        }
        setIsLoading(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    // USEEFFECT
    useEffect(() => {
        getImageHeight();
    }, []);

    return (
        <div className="h-screen w-screen flex flex-col md:flex-row items-center justify-start p-[1.5rem] lg:px-[5rem]">
            {/* HEADINGS -----------------------------------------------------------------------------------------------*/}
            <div className="hidden w-[50%] h-[60px] text-center md:block absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[50%] rounded-sm">
                <h1 className="text-[40px] linearGradientText1 h-full overflow-y-scroll ">
                    <span className="pr-[1rem]">Gamble</span>
                    <span className="">Rehab</span>
                </h1>
            </div>
            <div className="hidden w-[50%] text-center md:block absolute top-[68%] left-[50%] translate-x-[-50%] translate-y-[50%] rounded-sm">
                <h1 className="text-[40px] linearGradientText2 h-full overflow-y-scroll ">
                    <span className="">
                        You Have The Power{' '}
                        <span className="block">
                            {page === 'login'
                                ? "Let's Continue"
                                : page === 'register'
                                    ? "Let's Begin"
                                    : 'Never Forget'}
                        </span>
                    </span>
                </h1>
            </div>

            {/* IMAGE-BOX -----------------------------------------------------------------------------------------------*/}
            <div className="h-2/6 md:max-h-[700px] w-full shadow3 z-[10] md:p-[2px]">
                <img
                    id="login-img"
                    className="h-full w-full object-cover aspect43"
                    src="https://media.istockphoto.com/id/869781128/vector/gambling.jpg?s=612x612&w=0&k=20&c=IIBpOkaVAMbaSBjk4lNJ2gyBP-FuUiLcCXgfCeMg2ZU="
                    alt=""
                />
            </div>

            {/* CHANGE-FORM-BOX -------------------------------------------------------------------------------------------*/}
            <div
                className={`flex flex-col h-1/6 md:h-2/6 md:max-h-[700px] w-full py-[4px] px-[10px] md:px-[1rem] shadow3 z-40`}
            >
                <motion.div
                    className={`h-1/3 w-full flex items-center justify-center text-lightGreen gap-[10px] p-[1rem] ${page === 'login' ? 'shadowPop' : ''
                        }`}
                    whileHover={{
                        backgroundColor: '#5FB495',
                        cursor: 'pointer',
                        color: '#000',
                    }}
                    onClick={() => setPage('login')}
                >
                    <div>
                        <BsPersonCircle />
                    </div>
                    <h3>Login</h3>
                </motion.div>
                <motion.div
                    className={`h-1/3 w-full flex items-center justify-center text-lightGreen gap-[10px] p-[1rem] ${page === 'register' ? 'shadowPop' : ''
                        }`}
                    whileHover={{
                        backgroundColor: '#5FB495',
                        cursor: 'pointer',
                        color: '#000',
                    }}
                    onClick={() => setPage('register')}
                >
                    <div>
                        <BsPencilSquare />
                    </div>
                    <h3>Register</h3>
                </motion.div>
                <motion.div
                    className={`h-1/3 w-full flex items-center justify-center text-lightGreen gap-[10px] p-[1rem] ${page === 'forgot' ? 'shadowPop' : ''
                        }`}
                    whileHover={{
                        backgroundColor: '#5FB495',
                        cursor: 'pointer',
                        color: '#000',
                    }}
                    onClick={() => setPage('forgot')}
                >
                    <div>
                        <BsFillLockFill />
                    </div>
                    <h3>Forgot Password</h3>
                </motion.div>
            </div>

            {/* FORM-BOX ------------------------------------------------------------------------------------------- */}
            <div className="h-3/6 md:h-2/6 md:max-h-[700px] w-full flex flex-col items-center pt-[10px] shadow3 z-40">
                <h2 className="text-[26px] font-semibold text-lightGreen">
                    {page.toLocaleUpperCase()}
                </h2>
                {page === 'login' ? (
                    <LoginForm
                        handleFormSubmit={handleFormSubmit}
                        handleInputChange={handleInputChange}
                        email={email}
                        password={password}
                    />
                ) : page === 'register' ? (
                    <RegisterForm
                        handleFormSubmit={handleFormSubmit}
                        handleInputChange={handleInputChange}
                        email={email}
                        password={password}
                        name={name}
                    />
                ) : (
                    <LoginForm
                        handleFormSubmit={handleFormSubmit}
                        handleInputChange={handleInputChange}
                        email={email}
                        password={password}
                    />
                )}

                <div className="h-full w-full relative flex justify-center items-end">
                    <button
                        className="text-[13px] py-[2px] z-[100] text-lightBlue h-[30px] w-full font-semibold opacity-75 bg-darkGreen cursor-pointer btnTapStyle1"
                        onClick={() => navigate('/')}
                    >
                        Return Home
                    </button>
                </div>

                {/* BG-BLURS -------------------------------------------------------------------------------------------*/}
                <span className="h-1/4 w-1/6 green_gradient absolute right-0 top-[-200px] z-[0] "></span>
                <span className="h-1/3 w-1/5 darkGreen_gradient absolute right-0 z-[-1]  "></span>
                <span className="h-1/2 w-1/4 white_gradient absolute right-0 top-[-200px] z-[0]  "></span>
                <span className="h-1/6 w-1/4 darkerGreen_gradient absolute bottom-0 left-[-15%] top-[50px] z-[0]  "></span>
                <span className="h-1/6 w-1/3 white_gradient absolute bottom-0 left-[-15%] z-[0]  "></span>
                <span className="h-1/6 w-1/4 darkerGreen_gradient absolute bottom-[-100px ] left-[-10%] z-[0]  "></span>
            </div>
        </div>
    );
};

export default Login1;
