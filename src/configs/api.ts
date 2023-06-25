import axios from 'axios'

const api = () => {
    const createApi = axios.create({
        baseURL: 'https://api.unsplash.com',
        params: {
            client_id: 'Uh_u1CgUCoqxaQuiepnLUiEkygwIV3KwaVhGo2bhDbI'
        }
    })

    return createApi
}

export default api()