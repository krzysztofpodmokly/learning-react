// File related with axios configuration
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 10daf940064d7e9f664f17b6196260e11730d3bce5d2279c5d0e53fd2ee6788d'
    }
});