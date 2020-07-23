import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
// Login
export function login (data) {
    return axios.post(`${API_URL}/api/jwtauth/token/`, { username: data.name, password: data.password })
    .then(response => {
        localStorage.setItem('x-access-token', response.data.access);
        localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);
        axios.defaults.headers.common['Authentication'] = `Bearer ${response.data.access}`;
        return response.data
    })
    .catch(err => Promise.reject('Authentication Failed!'));
 }

 export function logOut(){
    delete axios.defaults.headers.common['Authentication'];
    localStorage.removeItem('x-access-token');
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
    if (localStorage.getItem('x-access-token')){
        return true
    }else{
        return false
    }
}
export function home () {
    return axios.get(`${API_URL}/api/home/`)
    .then(response => {
        console.log(response);
        return response.data.results
    })
    .catch(err => Promise.reject('A user with that username already exists.'));

}
// Category
export function category_create (data) {

    let headers ={
        "Authorization": `Bearer ${localStorage.getItem('x-access-token')}`
    }
    return axios.post(`${API_URL}/api/category/`, { name:data.name},{headers})
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject('Failed!'));

}

export function category_all () {
    let headers = {
        "Authorization": `Bearer ${localStorage.getItem('x-access-token')}`
    }
    return axios.get(`${API_URL}/api/category/`,{headers})
    .then(response => {
        return response.data.results
    })
    .catch(err => Promise.reject('A user with that username already exists.'));

}

 export function category_single (data) {
    let headers = {
        "Authorization": `Bearer ${localStorage.getItem('x-access-token')}`
    }
    return axios.get(`${API_URL}/api/category/1`,headers)
    .then(response => {
        return response.data
    })
    .catch(err => Promise.reject('A user with that username already exists.'));
 }

//  Conference
export function conference_create (data) {

    let headers ={
        "Authorization": `Bearer ${localStorage.getItem('x-access-token')}`
    }
    return axios.post(`${API_URL}/api/conference/`, { name:data.name,website:data.website,about:data.about,phone:data.phone,email:data.email,address:data.address,city:data.city,zipCode:data.zipCode,speakers:data.speakers,facebook:data.facebook,twitter:data.twitter,instagram:data.instagram,organizerID:data.organizerID,locations:data.locations,user:data.user,category:data.category},{headers})
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject('Failed!'));

}

 export function conference_single (data) {
    let headers = {
        "Authorization": `Bearer ${localStorage.getItem('x-access-token')}`
    }
    return axios.get(`${API_URL}/api/conference/1`,headers)
    .then(response => {
        return response.data
    })
    .catch(err => Promise.reject('A user with that username already exists.'));
 }