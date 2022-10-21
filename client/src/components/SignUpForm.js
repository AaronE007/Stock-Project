import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
 

  function handleSubmit(e) {
   
  }

  return (
    <form onSubmit={handleSubmit}>
      
    </form>
  );
}

export default SignUpForm;
