import games from "../models/Games.js";

class GamesController {
	static gamesList = (req, res) => {
		games.find((error, games) => {
			res.status(200).json(games);
		});
	};
}

export default GamesController;
