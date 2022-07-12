import publishers from "../models/Publishers.js";

class PublishersController {
	static publishersList = (req, res) => {
		publishers.find((error, publishers) => {
			if (error) {
				res.status(500).send({ message: error.message });
			} else {
				res.status(200).json(publishers);
			}
		});
	};

	static listPublisherById = (req, res) => {
		const id = req.params.id;

		publishers.findById(id, (error, publishers) => {
			if (error) {
				res.status(400).send({
					message: `${error.message} - Id da publisher não encontrado`,
				});
			} else {
				res.status(200).send(publishers);
			}
		});
	};

	static registerPublisher = (req, res) => {
		const publisher = new publishers(req.body);

		publisher.save((error) => {
			if (error) {
				res.status(500).send({
					message: `${error.message} - Falha ao cadastrar publisher`,
				});
			} else {
				res.status(201).send(publisher.toJson());
			}
		});
	};

	static updatePublisher = (req, res) => {
		const id = req.params.id;

		publishers.findByIdAndUpdate(id, { $set: req.body }, (error) => {
			if (error) {
				res.status(500).send({ message: error.message });
			} else {
				res.status(200).send({
					message: `Informações da publisher atualizadas com sucesso!`,
				});
			}
		});
	};

	static deletePublisher = (req, res) => {
		const id = req.params.id;

		publishers.findByIdAndDelete(id, (error) => {
			if (error) {
				res.status(400).send({ message: error.message });
			} else {
				res.status(200).send({ message: "Publisher removida com sucesso!" });
			}
		});
	};
}

export default PublishersController;
