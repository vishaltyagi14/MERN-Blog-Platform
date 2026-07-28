import React from "react";

export const OnlyContext= React.createContext();
export const ContextProvider=({children})=>{
    return <OnlyContext.Provider ></OnlyContext.Provider>
}