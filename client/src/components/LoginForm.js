import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
   e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input onChange={(e) => setUsername(e.target.value)} type="text" id="name" value={username} required/>

      <br/>
      <br/>

      <label>Password: </label>
      <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" value={password} required/>
    </form>
  );
}

export default LoginForm;
