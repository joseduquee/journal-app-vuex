import axios from 'axios'

const journalApi = axios.create({
    baseURL: ''
})

export default journalApi