import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

/* 
  Basically reducers are there to manage state in
  an application. In essence, a reducer is a function
  which takes two arguments -- the current state and 
  an action -- and returns based on both arguments a new
  state.
*/

const GithubContext = createContext()

//get initial users (testing purposes)

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)


  return <GithubContext.Provider value= {{
    ...state,
    dispatch,
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext