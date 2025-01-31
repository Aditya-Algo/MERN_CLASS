const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/admin/authRoutes");
const companyRoutes = require("./routes/admin/companyRoutes");

// const jwt = require("jsonwebtoken");
// const db = require("./models/database");

// const auth = (req, res, next) => {
//     next();
// };

const { attachDB } = require("./middlewares/authMiddleware");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(attachDB);

app.use("/auth", authRoutes);
app.use("/company", companyRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});