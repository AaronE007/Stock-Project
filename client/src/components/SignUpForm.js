import React,{ useState, useContext} from "react";
import {UserContext} from "./user"
import {useHistory} from "react-router-dom"



function SignUpForm({ onLogin }) {
  const {signup} = useContext(UserContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  function handleSubmit(e) {
   e.preventDefault()
   fetch('/signup', {
      method: 'POST',
      headers: {'Content-Type': 'appliction/json'},
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
      })
   })
   .then(res => res.json())
   .then(user => {
      if (!user.errors) {
        signup(user)
        history.push('/')
      } else {
        const errorsList = user.errors.map(e => <li>{e}</li>)
        setErrors(errorsList)
      }
   } )

  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <br/>
        <br/>
      <label>Password: </label>
      <input type="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <br/>
        <br/>
        <label>Password Confirm: </label>
        <input onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" id="password_confirmation" value={passwordConfirmation}  required/>
        <br/>
        <br/>
      <label>Bio: </label>
      <input type="text" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} required/>
        <br/>
        <br/>
      <input type="submit" value="Add User" />
    </form>
    <ul>
      {errors}
    </ul>
  </div>
  );
}

export default SignUpForm;
