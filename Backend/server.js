const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/ConnectDB");
const cors = require("cors");
const app = express();
const PORT = 80 || process.env.PORT;
const routes = require("./routes/Routes");

// Middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: ["http://localhost:3000/"]
}));
app.use(routes);

const startserver = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server Running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startserver();
