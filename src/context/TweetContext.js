import { createContext, useContext, useReducer } from "react";
import { ACTION } from "./actions";

let tweetStateContext = createContext()
let tweetDispatchContext = createContext()

export const tweetReducer = (state, action) => {
    switch (action.type) {
        case ACTION.SET_TWEET:
            return { ...state, tweetText: action.payload }
        default:
            throw new Error(`the ${action.type} action cannot be resolved`)
    }

}

const initialState = {
    tweetText: ''
}

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

export const useTweetState = () => {
    let context = useContext(tweetStateContext)
    if (context === undefined) {
        throw new Error("useTweetState must be used inside a tweet state provider")
    }
    return context
}

export const useTweetDispatch = () => {
    let context = useContext(tweetDispatchContext)
    if (context === undefined) {
        throw new Error("useTweetDispatch must be used inside a tweet dispatch provider")
    }
    return context
}

export const setTweetText = (dispatch, tweetText) => {
    dispatch({
        type: ACTION.SET_TWEET,
        payload: tweetText
    })
}