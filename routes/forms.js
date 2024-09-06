import express from "express"
import { tropicalParadiseForm } from "../controllers/tropicalParadise.js";
import { myWebsiteForm } from "../controllers/myWebsite.js";

const router = express.Router();

router.post("/tropicalParadise", tropicalParadiseForm)
router.post("/myWebsite", myWebsiteForm)

export default router;