const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {  })
    .then(() => console.log("Mongo Connected"))
    .catch(err => console.log(err));

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express" });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));