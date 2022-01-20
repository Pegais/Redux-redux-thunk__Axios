const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./object")

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        data
    })
})


app.listen(5000, () => {
    console.log("server running on port 5000")
})

