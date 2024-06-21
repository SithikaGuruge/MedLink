import express from "express";
const port = 5002;
const app = express();

app.listen({port}, () => {
  console.log(`Server is running on port ${port}`);
});
