import axios from 'axios'

const api = () => {
    const createApi = axios.create({
        baseURL: 'https://api.unsplash.com',
        params: {
            client_id: 'KW09zPvNTrEaPE4xNKExw2_6KOPlKBpkQ0vSVShPPeU'
        }
    })

    return createApi
}

export default api()