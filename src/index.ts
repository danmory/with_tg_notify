import express from "express";
import * as handlers from "./handlers";

const app = express();

app.get("/hello", handlers.getHelloWorld);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
