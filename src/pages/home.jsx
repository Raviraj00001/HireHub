import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#f5f7fa", minHeight: "100vh" }}>



      {/* HERO SECTION */}
      <div style={hero}>
        <h1 style={title}>Find your dream job now</h1>
        <p style={subtitle}>1000+ jobs waiting for you</p>

        {/* SEARCH BAR */}
        <div style={searchBar}>
          <input placeholder="Skills / Designations / Companies" style={input} />
          <input placeholder="Location" style={input} />
          <button style={searchBtn}>Search</button>
        </div>

        {/* CATEGORY CHIPS */}
        <div style={chipsContainer}>
          {["Remote", "MNC", "Engineering", "Internship", "Fresher"].map((item) => (
            <div key={item} style={chip}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 40px",
  background: "white",
  borderBottom: "1px solid #ddd"
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

const hero = {
  textAlign: "center",
  marginTop: "80px"
};

const title = {
  fontSize: "2.5rem",
  fontWeight: "bold"
};

const subtitle = {
  color: "#555",
  marginTop: "10px"
};

const searchBar = {
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "10px"
};

const input = {
  padding: "12px",
  width: "250px",
  borderRadius: "25px",
  border: "1px solid #ddd"
};

const searchBtn = {
  padding: "12px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "25px",
  cursor: "pointer"
};

const chipsContainer = {
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap"
};

const chip = {
  padding: "10px 15px",
  background: "white",
  borderRadius: "20px",
  border: "1px solid #ddd",
  cursor: "pointer"
};