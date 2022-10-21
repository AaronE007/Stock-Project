import React, { useContext,useState } from "react";
import { UserContext } from "./user";

function LoginForm() {
  const {login} = useContext(UserContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);



  function handleSubmit(e) {
   e.preventDefault()
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
      </form>
      <ul>
        {errors}
      </ul>
    </div>  
  );
}

export default LoginForm;
