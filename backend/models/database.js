const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

// Replace with your actual MongoDB URI
const uri = process.env.MONGODB_URI;
// Create a MongoClient instance
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,                  
        deprecationErrors: true        
    }
});


let db;

async function run() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        console.log("Connected to MongoDB successfully!");

        db=client.db("ecomdb");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
}
}

connectToDatabase();
module.exports = {
    getDb: () => db,
};