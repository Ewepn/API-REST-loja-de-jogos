import express from "express";
import GamesController from "../controllers/gamesController.js";

const router = express.Router();

router.get("/games", GamesController.gamesList);

export default router;
