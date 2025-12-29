const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const artistRoutes = require("./routes/artist");
const listenerRoutes = require("./routes/listener");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/admin", adminRoutes);
app.use("/artist", artistRoutes);
app.use("/listener", listenerRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
