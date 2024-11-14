// import Begin from "./Components/Begin";
import Login from "../Components/Login";
import HomePage from "../Components/HomePage";
import SignupPage from "../Components/Signup";
import Payments from "../Components/PaymentPage";
import SuccessPage from "../Components/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signuppage" element={<SignupPage />} />
          <Route path="/payments" element={<Payments />}></Route>
          <Route path="/successpage" element={<SuccessPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
