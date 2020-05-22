import axios from 'axios'

const service = axios.create({
    baseURL: '',
    timeout: 2000,
    headers: {
        'content-type': 'application/json'
    }
});
export default {
    service,
    getBinary(url, params) {
        params = params || {};
        return new Promise((resolve, reject) => {
            axios.request({
                url: url,
                method: params.cmd || "GET",
                timeout: 2000
            }).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    }
}
