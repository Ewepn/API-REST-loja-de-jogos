import developers from "../models/Developers.js";

class DevelopersController {
	static developersList = (req, res) => {
		developers.find((error, developers) => {
			if (!error) {
				res.status(200).json(developers);
			} else {
				res.status(500).send({ message: error.message });
			}
		});
	};

	static listDeveloperById = (req, res) => {
		const id = req.params.id;

		developers.findById(id, (error, developers) => {
			if (error) {
				res.status(400).send({
					message: `${error.message} - O Id buscado não foi encontrado`,
				});
			} else {
				res.status(200).send(developers);
			}
		});
	};

	static registerDeveloper = (req, res) => {
		let developer = new developers(req.body);

		developer.save((error) => {
			if (error) {
				res.status(500).send({
					message: `${error.message} - Falha ao cadastrar desenvolvedora`,
				});
			} else {
				res.status(201).send(developer.toJSON());
			}
		});
	};

	static updateDeveloper = (req, res) => {
		const id = req.params.id;

		developers.findByIdAndUpdate(id, { $set: req.body }, (error) => {
			if (!error) {
				res.status(200).send({
					message: "Informações da desenvolvedora atualizadas com sucesso!",
				});
			} else {
				res.status(500).send({ message: error.message });
			}
		});
	};

	static deleteDeveloper = (req, res) => {
		const id = req.params.id;

		developers.findByIdAndDelete(id, (error) => {
			if (!error) {
				res.status(200).send({ message: "Desenvolvedora removida com sucesso!" });
			} else {
				res.status(500).send({ message: error.message });
			}
		});
	};
}

export default DevelopersController;
