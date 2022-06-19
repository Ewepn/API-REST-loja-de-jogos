import express from "express";

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
	res.status(201).json("O Jogo foi cadastrado com sucesso !");
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
