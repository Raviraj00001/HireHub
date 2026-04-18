import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import DashboardSeeker from "./pages/DashboardSeeker";
import DashboardRecruiter from "./pages/DashboardRecruiter";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seeker" element={<DashboardSeeker />} />
        <Route path="/recruiter" element={<DashboardRecruiter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;