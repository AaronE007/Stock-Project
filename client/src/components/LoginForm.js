import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
   
  }

  return (
    <form onSubmit={handleSubmit}>
      
      
    </form>
  );
}

export default LoginForm;
