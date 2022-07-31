import { createContext, useContext, useReducer } from "react";
import { ACTION } from "./actions";

let tweetStateContext = createContext() // initializes the using of the state value
let tweetDispatchContext = createContext() // initializes the dispatching the state value

// reducer to chnage the state value of the new tweet slot
export const tweetReducer = (state, action) => {
    switch (action.type) {
        case ACTION.SET_TWEET:
            return { ...state, tweetText: action.payload }
        case ACTION.SET_TWEET_LIST:
            return { ...state, tweetList: action.payload }
        case ACTION.LIKE_TWEET:
            const tweetId = action.payload
            // this here will find the index of the clicked post
            const indexNum = state.tweetList.findIndex(item => item._id === tweetId)
            if (indexNum === -1) return state
            return {
                ...state,
                tweetList: [
                    ...state.tweetList.slice(0, indexNum),
                    {
                        ...state.tweetList[indexNum],
                        likes: state.tweetList[indexNum].likes + 1
                    },
                    ...state.tweetList.slice(indexNum + 1,)
                ]
            }
        default:
            throw new Error(`the ${action.type} action cannot be resolved`)
    }

}

const initialState = {
    tweetText: '',
    tweetList: []
}

// the children of this component will have access to all the states and functions in the context
export const TweetProvider = ({ children }) => {
    let [state, dispatch] = useReducer(tweetReducer, initialState)
    return (
        <tweetStateContext.Provider value={state}>
            <tweetDispatchContext.Provider value={dispatch}>
                {children}
            </tweetDispatchContext.Provider>
        </tweetStateContext.Provider>
    )
}

// used for using the state value
export const useTweetState = () => {
    let context = useContext(tweetStateContext)
    if (context === undefined) {
        throw new Error("useTweetState must be used inside a tweet state provider")
    }
    return context
}

// used for dispatching the state value
export const useTweetDispatch = () => {
    let context = useContext(tweetDispatchContext)
    if (context === undefined) {
        throw new Error("useTweetDispatch must be used inside a tweet dispatch provider")
    }
    return context
}

// originally made for new tweet slot state
export const setTweetText = (dispatch, tweetText) => {
    dispatch({
        type: ACTION.SET_TWEET,
        payload: tweetText
    })
}

export const setTweetList = (dispatch, list) => {
    dispatch({
        type: ACTION.SET_TWEET_LIST,
        payload: list
    })
}

// for liking the tweets
export const likeTweet = (dispatch, id) => {
    dispatch({
        type: ACTION.LIKE_TWEET,
        payload: id
    })
}