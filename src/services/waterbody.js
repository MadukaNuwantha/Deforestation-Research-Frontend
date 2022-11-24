import api from "../api/axios_requests"

const predictWaterBodies = async (payload) => {
    let config = {
        "Content-Type": "multipart/form-data"
    }
    let data = await api.post("predict/waterbody", payload, config)

    return data
}

export default { predictWaterBodies }