import express from "express";
import cors from "cors";
import Routes from "./routes/Routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(Routes);

app.listen(5000, ()=> console.log('Server up and running...'));