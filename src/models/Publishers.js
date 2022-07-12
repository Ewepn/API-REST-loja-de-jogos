import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema(
	{
		id: { type: String },
		name: { type: String, required: true },
		foundation: { type: Number, required: true },
	},
	{
		versionKey: false,
	}
);

const publishers = mongoose.model("publisher", publisherSchema);

export default publishers;
