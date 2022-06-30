import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
	id: { type: String },
	title: { type: String, required: true },
	developer: { type: String, required: true },
	publisher: { type: String, required: true },
	releaseYear: { type: Number, required: true },
});

const games = mongoose.model("games", gameSchema);

export default games;
