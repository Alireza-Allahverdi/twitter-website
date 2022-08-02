import { AxiosPrivate } from "./api"

export const GetHashtags = (callback) => {
    AxiosPrivate()
        .get("getAllHashTags")
        .then((res) => {
            let data = res.data
            console.log(data);


            callback(true, data)
        })
        .catch((err) => {
            callback(false, err)
            console.error(err)
        })
}

export const GetTweetsByHashtagReq = (hashTag, callback) => {
    // we can use destructing here aswell like only writing {hashTag} but its better thus way in my opinion
    AxiosPrivate()
        .post("getAllTweet", { hashTag })
        .then((res) => {
            let data = res.data
            callback(true, data)
        })
        .catch((err) => {
            callback(false, err)
            console.error(err)
        })
}