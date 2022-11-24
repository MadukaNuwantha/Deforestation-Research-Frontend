import api from "../api/axios_requests"

const predictWaterBodies = async (payload) => {
    try {
        let config = {}
        let data = await api.post("/waterbod", payload, config)
    }
    catch (err) { }
}

export default { predictWaterBodies }