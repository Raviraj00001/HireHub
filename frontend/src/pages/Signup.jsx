import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password || !role) {
      alert("Fill all fields");
      return;
    }

    alert("Account created!");
    navigate("/login");
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2>Register</h2>

        <input
          placeholder="Full Name"
          style={input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          style={input}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="seeker">Job Seeker</option>
          <option value="recruiter">Recruiter</option>
        </select>

        <button onClick={handleSignup} style={btn}>
          Register
        </button>
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

const btn = {
  width: "100%",
  padding: "10px",
  background: "#ff5a3c",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};