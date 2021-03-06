import games from "../models/Games.js";

class GamesController {
	static gamesList = (req, res) => {
		games
			.find()
			.populate("developer", "name")
			.populate("publisher", "name")
			.exec((error, games) => {
				if (!error) {
					res.status(200).json(games);
				} else {
					res.status(500).send({ message: error.message });
				}
			});
	};

	static listGameById = (req, res) => {
		const id = req.params.id;

		games
			.findById(id)
			.populate("developer")
			.populate("publisher")
			.exec((error, games) => {
				if (error) {
					res.status(400).send({
						message: `${error.message} - O Id buscado não foi encontrado`,
					});
				} else {
					res.status(200).send(games);
				}
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

	static updateGame = (req, res) => {
		const id = req.params.id;

		games.findByIdAndUpdate(id, { $set: req.body }, (error) => {
			if (!error) {
				res.status(200).send({ message: "Informações do jogo atualizadas com sucesso!" });
			} else {
				res.status(500).send({ message: error.message });
			}
		});
	};

	static deleteGame = (req, res) => {
		const id = req.params.id;

		games.findByIdAndDelete(id, (error) => {
			if (!error) {
				res.status(200).send({ message: "Jogo removido com sucesso!" });
			} else {
				res.status(500).send({ message: error.message });
			}
		});
	};

	static listGameByPublisher = (req, res) => {
		const publisherName = req.query.publisher;

		games
			.find({ publisher: publisherName }, {})
			.populate("developer")
			.populate("publisher")
			.exec((error, games) => {
				if (!error) {
					res.status(200).send(games);
				} else {
					res.status(400).send({ message: error.message });
				}
			});
	};
}

export default GamesController;
