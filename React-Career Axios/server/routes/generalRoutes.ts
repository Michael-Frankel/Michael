import express from "express";
const router = express.Router();

import { login } from "../controllers/generalCont";

router
  .post('/login', login)

export default router;