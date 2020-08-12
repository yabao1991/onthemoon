import axios from 'axios'

export default class Axios {
    static GET(options) {
        let baseApi = 'https://www.reddit.com/'
        return new Promise((resolve,reject)=>{
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (response.status === 200) {
                    resolve(response.data.data.children);
                } else {
                    reject(response.data.data.children);
                }
            })
        });
    }
}