import express from "express";
import GamesController from "../controllers/gamesController.js";

const router = express.Router();

router
	.get("/games", GamesController.gamesList)
	.get("/games/:id", GamesController.listGameById)
	.post("/games", GamesController.registerGame)
	.put("/games/:id", GamesController.updateGame);

export default router;
