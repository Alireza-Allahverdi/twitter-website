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

export const GetTweetByUserReq = (user,callback) => {
    AxiosPrivate()
    .post("getAllTweet", {user})
    .then((res) => {
        let data = res.data
        callback(true,data)
    })
    .catch((err) => {
        callback(false, err)
        console.error(err)
    })
}