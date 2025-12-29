import { useEffect, useState } from "react";
import API from "../api";

export default function AdminDashboard() {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetch(`${API}/admin/music`)
      .then(res => res.json())
      .then(setMusic);
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {music.map(m => (
        <div key={m.id}>
          {m.title} - {m.artist}
        </div>
      ))}
    </div>
  );
}
