import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoutes.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());
// Middleware for CORS
app.use(cors());
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App Connected to DB");
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
