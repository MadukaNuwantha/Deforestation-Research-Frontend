import api from "../api/axios_requests"

const predictWildfire = async (payload) => {
    let config = {
        "Content-Type": "multipart/form-data"
    }
    let data = await api.post("predict/wildfire", payload, config)

    return data
}

export default { predictWildfire }