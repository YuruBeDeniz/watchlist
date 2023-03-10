export default (state, action) => {
    switch (action.type) {
      case "ADD_MOVIE_TO_WATCHLIST":
        return {
          ...state,
          watchlist: [action.payload, ...state.watchlist],
        };
    default:
      return state;
  }
};



//we build a stote which stores all of our state data, the store hold the object,
//which holds the application state data

//the reducer returns state data, it describes how your state is transferred into
//the next state: it tells our store what to do with the data when something is happened

//actiıns are an object that tells the reducer how to change the state so basically
//we dispatch a type which then passes it to this reducer
//as we make actions, get more actions