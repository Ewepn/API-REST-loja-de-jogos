import express from "express";
import db from "./config/dbconnect.js";

db.on("error", console.log.bind(console, "Erro de conexão !"));
db.once("open", () => {
	console.log("Conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

const games = [
	{ id: 1, title: "The Last of us" },
	{ id: 2, title: "Uncharted 4 A thief's end" },
];

app.get("/", (req, res) => {
	res.status(200).send("Home da loja");
});

app.get("/games", (req, res) => {
	res.status(200).json(games);
});

app.get("/games/:id", (req, res) => {
	let { id } = req.params;
	let index = searchGame(id);
	res.status(200).json(games[index]);
});

app.post("/games", (req, res) => {
	games.push(req.body);
	res.status(201).send("O Jogo foi cadastrado com sucesso !");
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
