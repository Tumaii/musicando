const express = require("express");
const db = require("../database/models/index");
const { Cancion } = require("../database/models");

const router = express.Router();

// GET /canciones (GET) que muestre un listado de las canciones con sus propiedades
router.get("/canciones", async (req, res) => {
  try {
    const songs = await db.Cancion.findAll();

    res.json(songs);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al buscar la cancion." });
  }
});

// GET /canciones/:id (GET) que muestre una canción
router.get("/canciones/:id", async (req, res) => {
  const songId = req.params.id;

  try {
    const song = await db.Cancion.findByPk(songId);

    if (!song) {
      res.status(404).json({ error: "Cancion no encontrada." });
    } else {
      res.json(song);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al buscar la cancion." });
  }
});

// POST /canciones (POST) para crear un nuevo registro de una canción
router.post("/canciones", async (req, res) => {
  try {
    const newSong = await db.Cancion.create(req.body);

    res.status(201).json(newSong);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al crear la cancion." });
  }
});

// PUT /canciones/:id (PUT) para editar una canción
router.put("/canciones/:id", async (req, res) => {
  const songId = req.params.id;

  try {
    const song = await db.Cancion.findByPk(songId);

    if (!song) {
      res.status(404).json({ error: "Cancion no encontrada." });
    } else {
      await song.update(req.body);

      res.json(song);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al buscar la cancion." });
  }
});

module.exports = router;