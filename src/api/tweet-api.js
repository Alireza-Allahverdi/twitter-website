import { AxiosPrivate } from "./api";

// will get all the tweets from server
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

// this will send the tweet from newtweet slot to server and meanwhile will be gotten from the postlist
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

// like tweets request
export const LikeReq = (id, callback) => {
    AxiosPrivate()
    .get(`likeTweet/${id}`)
    .then((res) => {
        let data = res.data
        callback(true, data)
    })
    .catch((err) => {
        callback(false, err)
        console.error(err)
    })
}