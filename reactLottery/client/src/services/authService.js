import axios from 'axios';
import { toast } from 'react-toastify';

// REGISTER USER --------------------------------------------------------------------
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/users/register',
      userData,
      {
        withCredentials: true,
      }
    );

    if (response.statusText === 'OK') {
      toast.success('Registered Successfully!');
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// LOGIN USER -----------------------------------------------------------------------
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/users/login',
      userData,
      {
        withCredentials: true,
      }
    );

    if (response.statusText === 'OK') {
      toast.success('Login Successfull!');
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// LOGOUT USER ---------------------------------------------------------------------
export const logoutUser = async () => {
  try {
    await axios.get(
      `https://jays-inventory-management.herokuapp.com/api/users/logout`,
      {
        withCredentials: true,
      }
    );

    toast.success('Session has expired, log-out successful!');
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// GET LOGIN STATUS --------------------------------------------------------------------
export const getLoginStatus = async () => {
  try {
    const response = await axios.get(
      `https://jays-inventory-management.herokuapp.com/api/users/loginstatus`,
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
