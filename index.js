import express from "express";

const app = express()
const PORT = 3500;

app.get('/', (req, res) => {
    res.json({
        message:"Gudangku"
    })
})

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
})