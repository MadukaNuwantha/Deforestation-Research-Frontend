import api from "../api/axios_requests"

const predictForestPatches = async (payload) => {
    let config = {
        "Content-Type": "multipart/form-data"
    }
    let data = await api.post("predict/forestpatch", payload, config)

    return data
}

export default { predictForestPatches }