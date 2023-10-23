import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  From: "",
  To: "",
  JourneyDate: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "From":
      console.log("hit");
      return { ...state, From: action.payload };
      break;

    case "To":
      return { ...state, To: action.payload };
      break;

    case "JourneyDate":
      return { ...state, JourneyDate: action.payload };
      break;

    default:
      break;
  }
};
export const CityContext = createContext(INITIAL_STATE);

const CityContextProvider = ({ children }) => {
  const [City, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <CityContext.Provider value={{ City, dispatch }}>
      {children}
    </CityContext.Provider>
  );
};
export default CityContextProvider;
