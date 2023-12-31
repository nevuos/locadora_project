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
    const response: AxiosResponse<void> = await api.post('/request_password_reset', { email });
    return response.data;
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error); 
  }
};

export const confirmEmail = async (confirmationUrl: string): Promise<{ msg: string }> => {
  try {
    if (!api.defaults.baseURL) {
      throw new Error('URL base não definida no axios.');
    }

    const urlWithoutBase = confirmationUrl.replace(api.defaults.baseURL, '');
    const response: AxiosResponse<{ msg: string }> = await api.get(urlWithoutBase);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error); 
  }
};



export const getUsers = async (email: String): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.get(`/auth/findUserByEmail/${email}`);
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

export const updateProfile = async (userData: User): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.put(`/auth/updateUser/${userData.id}`, JSON.stringify(userData), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error); 
  }
};


export const deleteUser = async (id: Number | null): Promise<void> => {
  try {
    const response: AxiosResponse<void> = await api.delete(`/auth/deleteUser/${id}`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    return Promise.reject(error); 
  }
};
