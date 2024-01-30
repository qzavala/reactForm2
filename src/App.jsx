// import { useState } from "react";
import Authenticate from "./Authenticate";
import SignUpForm from "./SignUpForm";
// import './App.css'
const [token, setToken] = useState(null);
function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}

// export default App
