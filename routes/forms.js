import express from "express"
import { tropicalParadiseForm } from "../controllers/tropicalParadise.js";

const router = express.Router();

router.post("/tropicalParadise", tropicalParadiseForm)

export default router;