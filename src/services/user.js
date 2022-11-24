import api from "../api/axios_requests"

const sign_in = async (payload) => {
    let config = {
        "Content-Type": "application/json"
    }
    let data = await api.post("api/user/login", payload, config, "user")

    return data
}

const sign_up = async (payload) => {
    let config = {
        "Content-Type": "application/json"
    }
    let data = await api.post("api/user/", payload, config, "user")

    return data
}

const auth = async (token) => {
    let config = {
        "x-auth-token": token,
        "Content-Type": "application/json"
    }
    let data = await api.post("api/user/auth", payload, config, "user")

    return data
}

export default { sign_in, sign_up, auth }