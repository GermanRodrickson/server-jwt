import React, { useState } from "react";
import Auth from "./components/authService";

export default function App() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(false);
  let container;

  const handleSubmit = () => {
    Auth.login(username, password)
      .then(res => {
        if (res) {
          console.log(res);
          setToken(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (token) {
    container = (
      <div>
        <p>In</p>
        <button
          onClick={() => {
            setToken(false);
            Auth.logout();
          }}
        >
          Logout
        </button>
      </div>
    );
  } else {
    container = <p>Out</p>;
  }

  return (
    <section>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={e => setName(e.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />{" "}
      <br />
      <input type="submit" onClick={handleSubmit} />
      {container}
    </section>
  );
}
