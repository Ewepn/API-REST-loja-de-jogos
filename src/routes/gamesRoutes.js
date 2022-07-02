import express from "express";
import GamesController from "../controllers/gamesController.js";

const router = express.Router();

router
	.get("/games", GamesController.gamesList)
	.post("/games", GamesController.registerGame)
	.put("/games/:id", GamesController.updateGame);

export default router;
