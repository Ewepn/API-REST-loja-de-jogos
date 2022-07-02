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
