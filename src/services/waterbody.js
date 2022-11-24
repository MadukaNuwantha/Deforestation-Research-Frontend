import api from "../api/axios_requests"

const predictWaterBodies = async (payload) => {
    let config = {
        "Content-Type": "multipart/form-data"
    }
    let data = await api.post("predict/waterbody", payload, config, "predict")

    return data
}

export default { predictWaterBodies }