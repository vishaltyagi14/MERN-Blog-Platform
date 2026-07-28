import React, { useState } from "react";

export const OnlyContext= React.createContext();
 const ContextProvider=({children})=>{
    const [accountDetails, setAccountDetails] = useState({
        username: '',name: ''
    })
    return <OnlyContext.Provider value={{
        accountDetails,setAccountDetails
    }} >{children}</OnlyContext.Provider>
}
export default ContextProvider