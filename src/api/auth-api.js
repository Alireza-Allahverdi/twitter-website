import axios, { AxiosPrivate } from "./api";

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

export const RegisterApi = (user, callback) => {
    axios
        .post("/api/register",user)
        .then((res) => {
            let data =  res.data
            callback(true, data)
        })
        .catch((err) => {
            console.error(err)
            callback(false, err.response.data.message)
        })
}

export const UploadUserPhoto = (photo, callback) => {
    AxiosPrivate()
    .post("uploadUserPhoto",photo)
    .then((res) => {
        let data = res.data
        callback(true, data)
    })
    .catch((err) => {
        console.error(err)
        callback(false, err.response.data.message)
    })
}