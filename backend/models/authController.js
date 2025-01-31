const jwt = require('jsonwebtoken');
const { 
    createAuth, 
    findByEmail 
} = require('../models/userModel');

const registerUser = async (req, res) => {
    const { email, uid, createdAt } = req.body;

    if (!email || !uid || !createdAt) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Try to create the auth record
        const result = await createAuth(email, uid, createdAt);
        return res.status(200).json({ message: "User registered successfully", result });
    } catch (error) {
        if (error.code === 11000) {
            // Handle duplicate key error (unique constraint violation)
            return res.status(409).json({ message: "User already exists" });
        }

        // If there's a different error (e.g., database issue)
        return res.status(500).json({ message: "Internal server error", error });
    }
};

const loginWithEmailPassword = (req, res) => {
    
};