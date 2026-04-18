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

    localStorage.setItem("user", role);

    if (role === "recruiter") {
      navigate("/recruiter");
    } else {
      navigate("/seeker");
    }

    window.location.reload();
  };

  return (
    <div style={container}>
  <div style={card}>
    <h2 style={{ marginBottom: "20px" }}>Login</h2>

    <input
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
      style={input}   // ✅ SAME STYLE as input
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="">Select Role</option>
      <option value="seeker">Job Seeker</option>
      <option value="recruiter">Recruiter</option>
    </select>

    <button onClick={handleLogin} style={button}>
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

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f7fa"
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  width: "320px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ddd"
};

const loginBtn = {
  width: "100%",
  padding: "10px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};