
import React from 'react'
import { useState } from 'react'
import userContext from './userContext'

function UserProvider({children}) {

    const [user, setUser] = useState({
        name:'Pritesh'
    })
  return (
    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider