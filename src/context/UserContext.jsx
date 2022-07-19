import React, { createContext, useState } from 'react'

export const User = createContext();

function UserProvider({children}) {

  const [user, setUser] = useState({});
  
  return (
    <User.Provider value={{user, setUser}}>
        {children}
    </User.Provider>
  )
}

export default UserProvider