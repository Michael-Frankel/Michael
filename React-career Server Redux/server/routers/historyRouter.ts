import express from "express";
const router = express.Router();

import { history } from "../controllers/historyCont"

router
    .get("/get-all-history", history)

export default router;