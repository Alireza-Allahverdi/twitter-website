import axios from "./api";

export const LoginApi = (user, callback) => {
    axios
        .post("/api/login",user)
        .then((res) => {
            let data =  res.data
            callback(true, data)
        })
        .catch((err) => {
            console.error(err)
            callback(false, err.response.data.message)
        })
}