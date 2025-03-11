const express = require("express");

// import cors from 'cors';
const MongoClient = require ('mongodb'); 


const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const app = express();
// app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;




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