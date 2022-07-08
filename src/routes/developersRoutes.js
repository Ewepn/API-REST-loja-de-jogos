import express from "express";
import DevelopersController from "../controllers/developersController.js";

const router = express.Router();

router
	.get("/developers", DevelopersController.developersList)
	.get("/developers/:id", DevelopersController.listDeveloperById)
	.post("/developers", DevelopersController.registerDeveloper)
	.put("/developers/:id", DevelopersController.updateDeveloper)
	.delete("/developers/:id", DevelopersController.deleteDeveloper);

export default router;
