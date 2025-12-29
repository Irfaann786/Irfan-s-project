const express = require("express");
const db = require("../db");
const router = express.Router();

// User Management
router.post("/user", (req, res) => {
  const { name, email, role } = req.body;
  db.run(
    "INSERT INTO users (name, email, role) VALUES (?, ?, ?)",
    [name, email, role],
    () => res.json({ message: "User created successfully" })
  );
});

// Approve Music
router.post("/approve/:id", (req, res) => {
  db.run(
    "UPDATE music SET approved = 1 WHERE id = ?",
    [req.params.id],
    () => res.json({ message: "Music approved" })
  );
});

// View Music
router.get("/music", (req, res) => {
  db.all("SELECT * FROM music", [], (err, rows) => res.json(rows));
});

module.exports = router;
