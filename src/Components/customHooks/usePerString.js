import { useEffect, useState } from "react";

const usePerString = (initial, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const persistedVal = sessionStorage.getItem(sessionStorageKey);
    return persistedVal ? JSON.parse(persistedVal) : initial;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);

  return [state, setState];
};

export const useStateString = () => {
  return usePerString("", "searchString");
};
