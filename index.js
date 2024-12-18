import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express()
const PORT = 3500;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message:"Gudangku"
    })
})

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
})