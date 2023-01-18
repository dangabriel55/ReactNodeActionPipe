const express = require('express');
const app = express();

app.get('/name', (req,res) => {
    res.send("Sampaio");
})

let port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});