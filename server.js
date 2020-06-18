const express = require("express");

const app = express();
//
app.use(express.static("public"));
//
const PORT = 7200 || process.env.PORT;
app.listen(PORT, () => {
    console.log("Listening", PORT);
});
