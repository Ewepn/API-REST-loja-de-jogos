import games from "../models/Games.js";

class GamesController {
	static gamesList = (req, res) => {
		games.find((error, games) => {
			res.status(200).json(games);
		});
	};

	static registerGame = (req, res) => {
		let game = new games(req.body);

		game.save((error) => {
			if (error) {
				res.status(500).send({ message: `${error.message} - falha ao cadastrar o jogo` });
			} else {
				res.status(201).send(game.toJSON());
			}
		});
	};
}

export default GamesController;
