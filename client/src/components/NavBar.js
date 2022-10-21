import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './user'


const style = {
  width: "100%",
  magrin:"auto",
  padding: "1em",
  color: "black",
  backgroundColor: "Gold",
  fontWeight: "600",
  verticalAlign: "center",
}

const Navbar = () => {
  
  const {logout} = useContext(UserContext)

  const logoutUser = () => {
    fetch('/logout')
    .then(() => {
      logout()
    })
  }

  return (
    <nav>
      <button onClick={logoutUser} style={style}> Sign Out</button>
      <Link style={style} to="/">Home</Link>
      <Link style={style}  to="/login">Login</Link>
      <Link style={style}  to="/signup">Signup</Link>
    </nav>
  )
}

export default Navbar;


