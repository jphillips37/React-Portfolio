const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Site Under Contruction." });
  });

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
})