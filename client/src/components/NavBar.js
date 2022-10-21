import React from 'react'
import { Link } from 'react-router-dom'


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

  return (
    <nav>
      <Link style={style} to="/">Home</Link>
      <Link style={style}  to="/">Login</Link>
      <Link style={style}  to="/signup">Signip</Link>

    </nav>
  )
}

export default Navbar;


