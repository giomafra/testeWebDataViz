const usuarioModel = require("../models/usuarioModel");
const empresaModel = require("../models/empresaModel");

function cadastrar(req, res) {
    const nome = req.body.responsavelServer;
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;
    
    // Verificar se os campos obrigatórios foram preenchidos
    if (!nome || !email || !senha) {
        return res.status(400).send("Campos obrigatórios não preenchidos!");
    }

    // Primeiro, tenta cadastrar o usuário
    usuarioModel.cadastrar(nome, email, senha)
        .then((resultadoUsuario) => {
            console.log("Usuário cadastrado com sucesso:", resultadoUsuario);

            res.status(201).json(resultadoUsuario)

        })
        .catch((erroUsuario) => {
            console.log("Erro ao cadastrar usuário:", erroUsuario);
            res.status(500).json(erroUsuario.sqlMessage);
        });
}

module.exports = { cadastrar };
