import express from "express";
import db from "./config/dbConnect.js";
import games from "./models/Games.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão !"));
db.once("open", () => {
	console.log("Conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

routes(app);

app.get("/games/:id", (req, res) => {
	let { id } = req.params;
	let index = searchGame(id);
	res.status(200).json(games[index]);
});

app.put("/games/:id", (req, res) => {
	let { id } = req.params;
	let index = searchGame(id);
	games[index].title = req.body.title;
	res.status(201).json(games);
});

app.delete("/games/:id", (req, res) => {
	let { id } = req.params;
	let index = searchGame(id);
	games.splice(index, 1);
	res.send(`Jogo da posição ${index} foi deletado com sucesso !`);
});

function searchGame(id) {
	return games.findIndex((games) => games.id == id);
}

export default app;
