import React from 'react'
import {createContext,useContext,useState} from "react"

const Stripecontext=createContext()

const Stripeprovider = ({children}) => {
  const [clientsecret,setClientsecret]=useState("")
  return (
    <Stripecontext.Provider value={{clientsecret,setClientsecret}}>
        {children}
    </Stripecontext.Provider>
  )
};

export const Stripestate=()=>{
    return useContext(Stripecontext)
}

export default Stripeprovider