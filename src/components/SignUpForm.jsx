import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
const [token, setToken] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    // console.log("Hello 👋");
    if (password.length < 8) {
      setError("Password must be 8 characters")
    } else {
      setError("Signed Up Succesful");
    }
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),

          // ON AUTHENTICATE COMPONENT TAB. DELETE LATER
        }
      );

      const result = await response.json();
      setToken(result.token);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
