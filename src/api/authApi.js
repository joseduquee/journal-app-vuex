import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyCa065WVQMNyfqUfxC2XX6surPiYHm9F3U'
    }
})

export default authApi