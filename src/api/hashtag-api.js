import { AxiosPrivate } from "./api"

export const GetHashtags = (callback) => {
    AxiosPrivate()
        .get("getAllHashTags")
        .then((res) => {
            let data = res.data
            callback(true, data)
        })
        .catch((err) => {
            callback(false, err)
            console.error(err)
        })
}