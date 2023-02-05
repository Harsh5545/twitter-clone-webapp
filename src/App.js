import SignIn from "./pages/signInpage/signIn";
import SignUp from "./pages/signUpPage/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
function App() {
  return (
    <>
      {/* <SignUpForm /> */}
      <Router>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;