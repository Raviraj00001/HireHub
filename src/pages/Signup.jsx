import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "seeker"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check if user already exists
    if (users.find((u) => u.email === form.email)) {
      alert("User already exists ❌");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful ✅");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({...form, name:e.target.value})}
        required
      />

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

      <select onChange={(e) => setForm({...form, role:e.target.value})}>
        <option value="seeker">Job Seeker</option>
        <option value="recruiter">Recruiter</option>
      </select>

      <button>Signup</button>
    </form>
  );
}