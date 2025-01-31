const { getDb } = require("./database"); // Ensure this points to your MongoDB connection setup

const createAuth = async (email, uid, createdAt) => {
    try {
        const db = getDb();
        const collection = db.collection("auth");

        // Create unique index on email field if it doesn't exist
        await collection.createIndex({ email: 1 }, { unique: true });

        // Create unique index on uid field if it doesn't exist
        await collection.createIndex({ uid: 1 }, { unique: true });

        // Insert the document into the collection
        const result = await collection.insertOne({ email, uid, createdAt });

        return result;
    } catch (error) {
        throw error; // Throwing error will be caught in the controller
    }
};

const findUserByEmail = async (email) => {
    try {
        const db = getDb();
        const collection = db.collection("auth");
        const user = await collection.findOne({ email });

        return user;
    } catch (error) {
        console.error("Error finding user by email:", error);
        throw error;
    }
};