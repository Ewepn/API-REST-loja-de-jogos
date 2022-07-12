import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
	id: { type: String },
	title: { type: String, required: true },
	developer: { type: mongoose.Schema.Types.ObjectId, ref: "developer", required: true },
	publisher: { type: mongoose.Schema.Types.ObjectId, ref: "publisher", required: true },
	releaseYear: { type: Number, required: true },
});

const games = mongoose.model("games", gameSchema);

export default games;
