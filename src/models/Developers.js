import mongoose from "mongoose";

const developerSchema = new mongoose.Schema(
	{
		id: { type: String },
		name: { type: String, required: true },
		foundation: { type: Number, required: true },
	},
	{
		versionKey: false,
	}
);

const developers = mongoose.model("developer", developerSchema);

export default developers;
