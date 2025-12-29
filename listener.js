const express = require("express");
const db = require("../db");
const router = express.Router();

// Stream Music
router.get("/stream", (req, res) => {
  db.all(
    "SELECT * FROM music WHERE approved = 1",
    [],
    (err, rows) => res.json(rows)
  );
});

// Create Playlist
router.post("/playlist", (req, res) => {
  const { userId, title } = req.body;
  db.run(
    "INSERT INTO playlists (userId, title) VALUES (?, ?)",
    [userId, title],
    () => res.json({ message: "Playlist created" })
  );
});

// Follow Artist
router.post("/follow", (req, res) => {
  const { userId, artist } = req.body;
  db.run(
    "INSERT INTO follows (userId, artist) VALUES (?, ?)",
    [userId, artist],
    () => res.json({ message: "Artist followed" })
  );
});

module.exports = router;
