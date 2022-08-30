const repository = require('../repositories/collection-repository')

exports.get = async(req, res) => {
    const data = await repository.getCollection();
    res.status(200).send(data);
}

exports.getById = async(req, res) => {
    const id = req.params.id;
    const data = await repository.getById(id);
    if(!data) {
        res.status(400).send({ message: "Não foi possível encontrar a coleção" });
    }
    return res.status(200).send(data);
}

exports.post = async(req, res) => {
    try {
        await repository.createCollection(req.body);
        res.status(200).send({ message: "Coleção criada com sucesso" });
    } catch (error) {
        console.log("[ERROR]", error);
        res.status(400).send({ message: "Não foi possível criar a coleção" });
    }
}

exports.put = async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body)
    try {
        await repository.putCollection(id, body);
        res.status(200).send({ message: "Coleção atualizada com sucesso" });
    } catch (error) {
        console.log("[ERROR]", error);
        res.status(400).send({ message: "Não foi possível atualizar a coleção" });
    }
}

exports.delete = async(req, res) => {
    const id = req.params.id;
    try {
        await repository.deleteCollection(id);
        res.status(200).send({ message: "Coleção removido com sucesso" });
    } catch (error) {
        console.log("[ERROR]", error);
        res.status(400).send({ message: "Não foi possível remover a coleção" });
    }
}