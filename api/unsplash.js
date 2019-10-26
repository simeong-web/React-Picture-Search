import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d2c04903800ac59f9025d88fe6c5a67cb38dbbed6215145dfef52058956e06a1'
    }
});