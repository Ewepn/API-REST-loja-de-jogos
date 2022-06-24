import express from "express";
import games from "./gamesRoutes.js";

const routes = (app) => {
	app.route("/").get((req, res) => {
		res.status(200).send({ title: "Loja de jogos" });
	});

	app.use(express.json(), games);
};

export default routes;
