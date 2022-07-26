import axios from "axios";

export default axios.create({
    baseURL: "https://twitterapi.liara.run/", // create a base url so that it wont be needed to write url eachtime requesting to server
    // headers: { // when there is discussion about security of website we would need header to authorize our requests to server
    //     API_KEY: "lsdkljfalksfjasdfkjlasfjklasdkfjsadjf"
    // }
})

export const AxiosPrivate = () => {
    axios.create({
        baseURL: "https://twitterapi.liara.run/api/",
        headers: {
            "x-auth-token": localStorage.getItem("x-auth-token")
        }
    })
}