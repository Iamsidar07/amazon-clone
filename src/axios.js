import axios from "axios";

const instance=axios.create({
    baseURL:"http://localhost:5001/fir-9f669/us-central1/api",
})

export default instance;