
const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "..", "frontend")));
const PORT = 3001;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
})

app.listen(PORT, () => {
    console.log(`server is runnig on PORT: ${PORT}`);
})


