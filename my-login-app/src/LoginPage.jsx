// Import necessary React components and hooks
import React, { useState } from 'react';

// Create a functional component for the login page
const LoginPage = () => {
  // State to manage user inputs (username and password)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // You can add authentication logic here (e.g., check credentials with a backend server)
    // For simplicity, let's just log the credentials for now
    console.log('Username:', username);
    console.log('Password:', password);

    // You can redirect the user to another page upon successful login
    // For simplicity, let's just clear the form inputs
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
