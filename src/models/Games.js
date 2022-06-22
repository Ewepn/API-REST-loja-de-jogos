import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
	id: { type: String },
	title: { type: String },
	developer: { type: String },
	publisher: { type: String },
	releaseYear: { type: Number },
});

const games = mongoose.model("games", gameSchema);

export default games;
