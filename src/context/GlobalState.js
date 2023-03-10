import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//to create context, we need an initial value which will be our store
const initialState= {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [] ,
    watched: [],
};

//to be able to provide GlobalContext to the other components, we need to make a
//provider which will allow us to access to GlobalContext 
export const GlobalContext = createContext(initialState);


export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
    }, [state])

    //actions
    const addMovieToWatchlist = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    }

    return (
      <GlobalContext.Provider 
          value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchlist,
          }}
      >
          {props.children}
      </GlobalContext.Provider>
    )
}


//whenever a movie is added to the list, the useEffect function is triggered, so that
//we can save it in localStorage

//localStorage has to be a string, so we need to stringify 


