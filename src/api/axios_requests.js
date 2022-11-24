import axios from "axios";

const root = "http://127.0.0.1:8000"

const get = async (url) => {
    let result = null;
    try {
        let response = await axios.get(`${root}/${url}`);
        
        result = response.data
    } catch(error) {
        console.log(error);
    }

    return result
}

const post = async (url, payload, config) => {
    let result = null;
    try {
        let response = await axios.post(`${root}/${url}`, payload, config);
        
        result = response.data
    } catch(error) {
        console.log(error);
    }

    return result
}

const put = async (url, payload, config) => {
    let result = null;
    try {
        let response = await axios.put(`${root}/${url}`, payload, config);
        
        result = response.data
    } catch(error) {
        console.log(error);
    }

    return result
}

const _delete = async (url) => {
    let result = null;
    try {
        let response = await axios.put(`${root}/${url}`);
        
        result = response.data
    } catch(error) {
        console.log(error);
    }

    return result
}

export default { get, post, put, _delete }