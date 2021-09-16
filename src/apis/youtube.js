import axios from 'axios';

const KEY = 'AIzaSyAuk5Io0JJuyKa4RR6umjaViK1-qGZB0E0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});