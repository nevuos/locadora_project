import axios, { AxiosResponse } from 'axios';
import User from '../core/UserData';

const BASE_URL = 'http://localhost:8080/api'; 

const api = axios.create({
  baseURL: BASE_URL,
});


const handleRequestError = (error: any) => {
  throw error.response?.data || error.message;
};

interface LoginResponse {
  access_token: string;
}

export const registerUser = async (userData: User): Promise<{ msg: string }> => {
  try {
    const response: AxiosResponse<{ msg: string }> = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error); 
  }
};


export const loginUser = async (userData: User): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await api.post('/auth/login', userData);
    return response.data
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error);
  }
};

export const resetPassword = async (email: string): Promise<void> => {
  try {
    const response: AxiosResponse<void> = await api.post('/reset-password', { email });
    return response.data;
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error); 
  }
};

export const confirmEmail = async (token: string): Promise<void> => {
  try {
    const response: AxiosResponse<void> = await api.post('/confirm-email', { token });
    return response.data;
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error); 
  }
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const response: AxiosResponse<User[]> = await api.get('/users');
    return response.data;
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error); 
  }
};

export const createUser = async (userData: User): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error);
  }
};

export const updateUser = async (userId: string, userData: User): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.put(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error); 
  }
};

export const deleteUser = async (userId: string): Promise<void> => {
  try {
    const response: AxiosResponse<void> = await api.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error); 
  }
};
