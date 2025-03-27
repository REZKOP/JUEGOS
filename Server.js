require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.rawg.io/api/games";

app.use(cors());

app.get("/games", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo los datos" });
  }
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
