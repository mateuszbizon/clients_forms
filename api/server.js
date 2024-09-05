import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import formsRoutes from "../routes/forms.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/forms", formsRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});