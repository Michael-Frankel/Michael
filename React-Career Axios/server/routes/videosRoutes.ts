import express from "express";
const router = express.Router();

import { getVideos } from "../controllers/videosCont";

router
    .get('/get-videos', getVideos)

export default router;