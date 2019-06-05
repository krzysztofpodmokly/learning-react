import axios from 'axios';
const KEY = 'AIzaSyBX5Gy2X7vlVACZQ7TDi-My7bYqVzZviTc';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});