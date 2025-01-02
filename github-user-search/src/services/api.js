import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
    },
});

export default api;
