import React, { useContext,useState } from "react";
import { UserContext } from "./user";
import {useHistory} from "react-router-dom"


function LoginForm() {
  const {login} = useContext(UserContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()


  function handleSubmit(e) {
   e.preventDefault()
   fetch('/login', {
      method: 'Post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password
      })
   })
    .then(res => res.json())
    .then(user => {
        if (!user.errors) {
          login(user)
          history.push('/')
        } else {
          const errorsList = user.errors.map(e => <li>{e}</li>)
          setErrors(errorsList)
        }
     })
  
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" id="name" value={username} required/>
          <br/>
          <br/>
        <label>Password: </label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" value={password} required/>
          <br/>
          <br/>
        <label>Password Confirm: </label>
        <input onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" id="password_confirmation" value={passwordConfirmation}  required/>
        <br/>
        <br/>
        <input type="submit" value="Login" />
      </form>
      <ul>
        {errors}
      </ul>
    </div>  
  );
}

export default LoginForm;
