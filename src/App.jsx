import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardRecruiter from "./pages/DashboardRecruiter";
import DashboardSeeker from "./pages/DashboardSeeker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recruiter" element={<DashboardRecruiter />} />
        <Route path="/seeker" element={<DashboardSeeker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;