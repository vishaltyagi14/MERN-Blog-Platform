import React, { useState } from "react";

export const OnlyContext= React.createContext();
 const ContextProvider=({children})=>{
    const [account, setAccount] = useState({
        username: '',name: ''
    })
    return <OnlyContext.Provider value={{
        account,setAccount
    }} >{children}</OnlyContext.Provider>
}
export default ContextProvider