import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
// Login
export function login (data) {
    return axios.post(`${API_URL}/api/jwtauth/token/`, { username: data.name, password: data.password })
    .then(response => {
    console.log(response)
    localStorage.setItem('x-access-token', response.data.access);
    localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);

    return response.data
    })
    .catch(err => Promise.reject('Authentication Failed!'));
 }
// Register
export function register (data) {
    return axios.post(`${API_URL}/api/jwtauth/register/`, { username: data.name, email: data.email, password: data.password, password2: data.password2 })
    .then(response => {
    localStorage.setItem('x-access-token', response.data.access);
    localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);

    return response.data
    })
    .catch(err => Promise.reject('A user with that username already exists.'));
 }

export function isAuthenticated(){
    // console.log(localStorage.getItem('x-access-token'))
    if (localStorage.getItem('x-access-token')){
        return true
    }else{
        return false
    }
}