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
})




app.get('/api/planets' , async (req, res) => {

 try {
        // const client = await MongoClient.connect(url);
        // const db = client.db(dbName);
        // const collection = db.collection(collectionName);
        // const planets = await collection.find({}).toArray();
        // res.json(planets);

        res.send('anakin skywalker!');

   
 } catch (err) {
    console.error("error ", err);
    res.status(500).send("error!!!");
 }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});