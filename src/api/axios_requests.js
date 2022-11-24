import axios from "axios";

const root = {
    "prediction" : "http://127.0.0.1:8000",
    "user": "http://localhost:8080"
}

const get = async (url, mode) => {
    let result = null;
    try {
        let response = await axios.get(`${root[mode]}/${url}`);
        
        result = response.data
    } catch(error) {
        console.log(error);
    }

    return result
}

const post = async (url, payload, config, mode) => {
    let result = null;
    try {
        let response = await axios.post(`${root[mode]}/${url}`, payload, config);
        
        result = response.data
    } catch(error) {
        console.log(error);
    }

    return result
}

const put = async (url, payload, config, mode) => {
    let result = null;
    try {
        let response = await axios.put(`${root[mode]}/${url}`, payload, config);
        
        result = response.data
    } catch(error) {
        console.log(error);
    }

    return result
}

const _delete = async (url, mode) => {
    let result = null;
    try {
        let response = await axios.put(`${root[mode]}/${url}`);
        
        result = response.data
    } catch(error) {
        console.log(error);
    }

    return result
}

export default { get, post, put, _delete }