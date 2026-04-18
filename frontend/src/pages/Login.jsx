import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!email || !password || !role) {
      alert("Fill all fields");
      return;
    }

    // store login state
    localStorage.setItem("user", role);

    // redirect based on role
    if (role === "recruiter") {
      navigate("/recruiter");
    } else {
      navigate("/seeker");
    }

    // refresh navbar
    window.location.reload();
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <input
          type="email"
          placeholder="Email"
          style={input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          style={input}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="seeker">Job Seeker</option>
          <option value="recruiter">Recruiter</option>
        </select>

        <button onClick={handleLogin} style={loginBtn}>
          Login
        </button>

        <p style={{ marginTop: "15px" }}>
          New user?{" "}
          <span style={link} onClick={() => navigate("/signup")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f7fa"
};

const card = {
  background: "white",
  padding: "35px",
  paddingTop: "0px",
  borderRadius: "12px",
  width: "350px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const input = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "14px"
};

const loginBtn = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "15px",
  cursor: "pointer"
};

const link = {
  color: "#2563eb",
  cursor: "pointer",
  fontWeight: "500"
};