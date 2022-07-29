import { AxiosPrivate } from "./api";

export const GetTweets = (callback) => {
    AxiosPrivate()
    .post("getAllTweet")
    .then((res) => {
        const data = res.data
        callback(true,data)
    })
    .catch((err) => {
        console.error(err)
        callback(false, err)
    })
}

export const SendTweet = (data, callback) => {
    AxiosPrivate()
    .post("newTweet",data)
    .then((res) => {
        let data = res.data
        callback(true, data)
    })
    .catch((err) => {
        callback(false, err)
        console.error(err)
    })
}