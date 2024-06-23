import express from "express";
const port = 5002;
const app = express();

//middlewares
app.use(express.json());
app.use(cors());


app.listen({port}, () => {
  console.log(`Server is running on port ${port}`);
});
