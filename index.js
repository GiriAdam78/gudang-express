import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express()
const PORT = 3500;

app.use(bodyParser.json());

// Home Page
app.get('/', (req, res) => {
    res.json({
        message:"Gudangku"
    })
})

// Post Gudang
app.post('/gudang', async (req, res) => {
    const { nama, alamat, kapasitas } = req.body;
    try {
      const gudang = await prisma.gudang.create({
        data: { nama, alamat, kapasitas },
      });
      res.json(gudang);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
})