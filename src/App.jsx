import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { useState } from "react";
// import './App.css'
// const [token, setToken] = useState(null);


export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
    <SignUpForm token={token} setToken={setToken} />
    <Authenticate token={token} setToken={setToken} />
    </>
  );
}


// function App() {
//   const [token, setToken] = useState(null);

//   return (
//     <>
//       <SignUpForm token={token} setToken={setToken} />
//       <Authenticate token={token} setToken={setToken} />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <Authenticate />
//       <SignUpForm />
//     </>
//   );
// }

// export default App
