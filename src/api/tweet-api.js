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