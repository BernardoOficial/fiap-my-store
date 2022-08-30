const repository = require('../repositories/product-repository')

exports.get = async(req, res) => {
    const data = await repository.getProduct();
    res.status(200).send(data);
}

exports.getById = async(req, res) => {
    const id = req.params.id;
    const data = await repository.getById(id);
    if(!data) {
        res.status(400).send({ message: "Não foi possível encontrar o produto" });
    }
    return res.status(200).send(data);
}

exports.post = async(req, res) => {
    try {
        await repository.createProduct(req.body);
        res.status(200).send({ message: "Produto criado com sucesso" });
    } catch (error) {
        console.log("[ERROR]", error);
        res.status(400).send({ message: "Não foi possível criar o produto" });
    }
}

exports.put = async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body)
    try {
        await repository.putProduct(id, body);
        res.status(200).send({ message: "Produto atualizado com sucesso" });
    } catch (error) {
        console.log("[ERROR]", error);
        res.status(400).send({ message: "Não foi possível atualizar o produto" });
    }
}

exports.delete = async(req, res) => {
    const id = req.params.id;
    try {
        await repository.deleteProduct(id);
        res.status(200).send({ message: "Produto removido com sucesso" });
    } catch (error) {
        console.log("[ERROR]", error);
        res.status(400).send({ message: "Não foi possível remover o produto" });
    }
}