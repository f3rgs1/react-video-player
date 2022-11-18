import axios from 'axios';

const KEY = 'AIzaSyCrITgr9c4p3K07fd48jjz4_ZHz1EvaalY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});