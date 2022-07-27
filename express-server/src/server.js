const express = require("express");
const cors = require("cors");

const port = 3001;

const app = express();
//setting up json() processing and cors
app.use(express.json());
app.use(cors());

//set up routers
const productsRouter = require("./routes/products").router;
const stockRouter = require("./routes/stockevents").router;
const rfidRouter = require("./routes/rfid").router;

app.use("/products", productsRouter);
app.use("/stockevents", stockRouter);
app.use("/rfid", rfidRouter);

// Starts server on port and displays message that the server is running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
