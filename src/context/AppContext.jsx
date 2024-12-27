import { createContext } from "react";
import { doctors } from "../assets/assets";

// Make sure your doctors data has _id property
const doctorsWithIds = doctors.map((doc, index) => ({
  ...doc,
  _id: (index + 1).toString()
}));

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const value = {
        doctors: doctorsWithIds
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider