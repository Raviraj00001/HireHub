import Sidebar from "../components/Sidebar";

export default function DashboardSeeker() {
  return (
    <div style={{ display: "flex" }}>
      
      <Sidebar />

      <div style={main}>
        <h2>Available Jobs</h2>

        <div style={jobList}>
          <div style={card}>
            <h3>Frontend Developer</h3>
            <p>Google • Remote</p>
            <button style={btn}>Apply</button>
          </div>

          <div style={card}>
            <h3>Backend Developer</h3>
            <p>Amazon • Bangalore</p>
            <button style={btn}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const main = {
  flex: 1,
  padding: "30px",
  background: "#f5f7fa"
};

const jobList = {
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};

const btn = {
  marginTop: "10px",
  padding: "8px 15px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};