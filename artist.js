const express = require("express");
const db = require("../db");
const router = express.Router();

// Upload Music
router.post("/upload", (req, res) => {
  const { title, album, genre, artist } = req.body;
  db.run(
    "INSERT INTO music (title, album, genre, artist) VALUES (?, ?, ?, ?)",
    [title, album, genre, artist],
    () => res.json({ message: "Music uploaded, pending approval" })
  );
});

// Performance
router.get("/performance/:artist", (req, res) => {
  db.all(
    "SELECT title, streams, likes FROM music WHERE artist = ?",
    [req.params.artist],
    (err, rows) => res.json(rows)
  );
});

module.exports = router;
