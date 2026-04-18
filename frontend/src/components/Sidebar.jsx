import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div style={sidebar}>
      <h2 style={{ marginBottom: "30px" }}>HireHub</h2>

      <div style={menuItem} onClick={() => navigate("/seeker")}>
        Jobs
      </div>

      <div style={menuItem}>
        Applications
      </div>

      <div style={menuItem}>
        Profile
      </div>
    </div>
  );
}

const sidebar = {
  width: "220px",
  height: "100vh",
  background: "#fff",
  borderRight: "1px solid #ddd",
  padding: "20px"
};

const menuItem = {
  padding: "10px",
  cursor: "pointer",
  marginBottom: "10px",
  borderRadius: "5px"
};