import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'http://localhost:5107'
})

export default journalApi