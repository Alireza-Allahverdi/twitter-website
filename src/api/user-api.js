import { AxiosPrivate } from "./api"

export const GetUsers = (callback) => {
    AxiosPrivate()
        .get("getAllUser")
        .then((res) => {
            let data = res.data
            callback(true, data)
        })
        .catch((err) => {
            callback(false, err)
            console.error(err)
        })
}