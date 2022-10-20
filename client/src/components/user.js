import React, {useState, useContext, useEffect} from "react";

const UserContext = React.createContext();


function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useContext(false)

  useEffect(() => {
    fetch()
  })
  return (
    <div>
      
    </div>
  )
}

