import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav style={nav}>
      
      {/* LEFT */}
      <h2 style={logo} onClick={() => navigate("/")}>
        HireHub
      </h2>

      {/* RIGHT */}
      <div>
        {!isLoggedIn ? (
          <>
            <button style={loginBtn} onClick={() => navigate("/login")}>
              Login
            </button>

            <button style={registerBtn} onClick={() => navigate("/signup")}>
              Register
            </button>
          </>
        ) : (
          <>
            <button style={loginBtn}>Profile</button>
            <button style={registerBtn} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  background: "white",
  borderBottom: "1px solid #e5e7eb"
};

const logo = {
  color: "#2563eb",
  cursor: "pointer"
};

const loginBtn = {
  marginRight: "10px",
  padding: "8px 18px",
  border: "1px solid #2563eb",
  background: "white",
  color: "#2563eb",
  borderRadius: "20px",
  cursor: "pointer"
};

const registerBtn = {
  padding: "8px 18px",
  background: "#ff5a3c",
  color: "white",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer"
};