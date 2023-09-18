import { useEffect, useReducer } from "react";

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, (inital) => {
    const persistedVal = localStorage.getItem(localStorageKey);

    return persistedVal ? JSON.parse(persistedVal) : inital;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case "STAR":
      return currentStarred.concat(action.showId);
    case "UNSTAR":
      return currentStarred.filter((showId) => showId !== action.showId);
    default:
      return currentStarred;
  }
};
export const useCustomHook = () => {
  return usePersistedReducer(starredShowsReducer, [], "starredShows");
};
