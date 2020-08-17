import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://shinyfirst-7b737.firebaseio.com/'
});

export default instance;