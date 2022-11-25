import axios from "axios"
import { Form } from "react-router-dom"
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

    const config = {
        headers: {
          "x-auth-token": token,
          "Content-type": "application/json",
        },
      };

    let data = await axios.get("http://localhost:8080/api/user/auth", config)

    return data
}

const savePrediction = async (payload, token) => {

    const config = {
        headers: {
            "x-auth-token": token
        },
      };
    let data = await axios.post("http://127.0.0.1:8080/api/prediction/", payload, config)

    return data
}

export default { sign_in, sign_up, auth, savePrediction }