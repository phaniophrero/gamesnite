const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

// Action
// {
//   type: "FETCH_GAMES";
// }
// dispatch({type:"FETCH_GAMES"});

// Action Creator
// const fetchGames = (userData) => {
//   return {
//     type: "FETCH_GAMES",
//   };
// };

export default gamesReducer;
