import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-apps-cd9f0-default-rtdb.europe-west1.firebasedatabase.app'
})

export default journalApi