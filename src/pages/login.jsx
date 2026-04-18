import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));

      if (user.role === "seeker") {
        navigate("/seeker");
      } else {
        navigate("/recruiter");
      }

    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setForm({...form, email:e.target.value})}
        required
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({...form, password:e.target.value})}
        required
      />

      <button>Login</button>
    </form>
  );
}