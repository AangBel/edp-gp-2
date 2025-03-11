import express from 'express'
import { Db, MongoClient } from "mongodb"

const url = 'mongodb://localhost:27017/';


const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;

app.get('/api/characters', async (req, res) => {
    const client = new MongoClient(url);
    try{
        const db = await client.db('swapi');
       // console.log('Connected to the DB', db)

        const collection = db.collection('characters')
        console.log(collection)
        const characters = await collection.find({}).toArray();
        console.log(characters)
        res.json(characters)

        res.status(200).json(characters)
    }
    catch(err)
    {res.send('u suck')}
});

app.get('/api/films', async (req, res) => {
    const client = new MongoClient(url);
    try{
        const db = await client.db('swapi');
       // console.log('Connected to the DB', db)

        const collection = db.collection('films')
        console.log(collection)
        const films = await collection.find({}).toArray();
        console.log(films)
        res.json(films)

        res.status(200).json(films)
    }
    catch(err)
    {res.send('u suck')}
});

app.get('/api/planets', async (req, res) => {
    const client = new MongoClient(url);
    try{
        const db = await client.db('swapi');
    //    console.log('Connected to the DB 51', db)

        const collection = db.collection('planets')
        console.log(collection, "this is collection at 54")

        const planets = await collection.find({}).toArray();
        console.log(planets, "this is planets")

        res.json(planets)

        res.status(200).json(planets)
    }
    catch(err)
    {res.send('u suck')}
});








app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});