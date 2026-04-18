import Sidebar from "../components/Sidebar";

export default function DashboardRecruiter() {
  return (
    <div style={{ display: "flex" }}>
      
      <Sidebar />

      <div style={main}>
        <h2>Your Job Posts</h2>

        <button style={postBtn}>+ Post Job</button>

        <div style={jobList}>
          <div style={card}>
            <h3>Frontend Developer</h3>
            <p>2 Positions • Remote</p>
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

const postBtn = {
  padding: "10px 20px",
  background: "#ff5a3c",
  color: "white",
  border: "none",
  borderRadius: "5px",
  marginBottom: "20px",
  cursor: "pointer"
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