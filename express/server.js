import express from "express";
import { Db, MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017/";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;

const client = new MongoClient(url);
const db = client.db("swapi");
// console.log('Connected to the DB', db)

app.get("/api/characters", async (req, res) => {
  try {
    const character_collection = db.collection("characters");
    console.log(character_collection);

    const characters = await character_collection.find({}).toArray();
    console.log(characters);
    res.json(characters);

    // res.status(200).json(characters)
  } catch (err) {
    res.send("u suck");
  }
});

app.get("/api/characters/:id", async (req, res) => {
  try {
    const characterId = Number(req.params.id);
    const character = await db
      .collection("characters")
      .findOne({ id: characterId });

    if (!character) {
      return res.status(404).send("Character not found");
    }

    res.json(character);
  } catch (err) {
    res.status(500).send("Error fetching character by ID");
  }
});



app.get("/api/films", async (req, res) => {
  try {
    const film_collection = db.collection("films");
    console.log("this is film collection", film_collection);

    const films = await film_collection.find({}).toArray();
    console.log(films);
    res.json(films);
  } catch (err) {
    res.send("u suck");
  }
});

app.get("/api/films/:id", async (req, res) => {
  try {
    const filmId = Number(req.params.id);
    const film = await db.collection("films").findOne({ id: filmId });

    if (!film) {
      return res.status(404).send("film not found");
    }

    res.json(film);
  } catch (err) {
    res.status(500).send("Error fetching film by ID");
  }
});




app.get("/api/planets", async (req, res) => {
  const client = new MongoClient(url);
  try {
    const db = await client.db("swapi");
    //    console.log('Connected to the DB 51', db)

    const collection = db.collection("planets");
    console.log("this is collection at 54", collection);

    const planets = await collection.find({}).toArray();
    console.log(planets, "this is planets");

    res.json(planets);
  } catch (err) {
    res.send("u have an error");
  }
});

app.get("/api/planets/:id" , async ( req, res ) => {
    try {
        const planetId = Number(req.params.id);
        const planet = await db.collection("planets").findOne({ id: planetId });

        if (!planet) {
            return res.status(400).send("couldnt find planet");
        }

        res.json(planet);
    } catch (err) {
        res.status(500).send('error fetching planet by id');
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
