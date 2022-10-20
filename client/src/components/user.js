import React, {useState, useContext, useEffect} from "react";

const UserContext = React.createContext();


function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useContext(false)

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data)
      data.error ? setLoggedIn(false) : setLoggedIn(true)
    })
  }, [])

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
  }

  const logout = (user) => {
    setUser(user)
    setLoggedIn(true)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
  }



  return (
    <UserContext.Provider value={{user, login, logout, loggedIn, signup}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}