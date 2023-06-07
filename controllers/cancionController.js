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

router.get("/artistas", async (req, res) => {
  try {
    const artistas = await db.Artista.findAll();

    res.json(artistas);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al buscar el artista." });
  }
});



router.post("/artistas", async (req, res) => {
  try {
    const newArtista = await db.Artista.create(req.body);

    res.status(201).json(newArtista);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al crear el artista." });
  }
});

router.get("/generos", async (req, res) => {
  try {
    const generos = await db.Genero.findAll();

    res.json(generos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al buscar los generos." });
  }
});

router.post("/generos", async (req, res) => {
  try {
    const genero= await db.Genero.create(req.body);

    res.status(201).json(genero);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al crear el genero." });
  }
});

router.get("/albumes", async (req, res) => {
  try {
    const albumes = await db.Album.findAll();

    res.json(albumes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al buscar los albumes." });
  }
});

router.post("/albumes", async (req, res) => {
  try {
    const album = await db.Album.create(req.body);

    res.status(201).json(album);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ha ocurrido un error al crear el album." });
  }
});

module.exports = router;