
function validar() {
    let nome = document.getElementById("nomeCompleto").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let idade = document.getElementById("idade").value.trim();
    let mensalidade = document.getElementById("mensalidade").value;
    let nacionalidade = document.getElementById("nacionalidade").value.trim();
    let camiseta = document.getElementById("camiseta").value;
    let shorts = document.getElementById("shorts").value;
    let rg = document.getElementById("rg").value.trim();
    let dataNascimento = document.getElementById("dataNascimento").value.trim();
    let genero = document.getElementById("genero").value;
    let estadoCivil = document.getElementById("estadoCivil").value;
    let endereco = document.getElementById("endereco").value.trim();
    let bairro = document.getElementById("bairro").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value;
    let cep = document.getElementById("cep").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let email = document.getElementById("email").value.trim();
    let nomeMae = document.getElementById("nomeMae").value.trim();
    let planoEscolhido = document.getElementById("planoEscolhido").value;
    let numeroTorcedor = document.getElementById("numeroTorcedor").value.trim();
    let autorizacaoImagem = document.getElementById("autorizacaoImagem").value;
    let corCamiseta = document.getElementById("corCamiseta").value;
    let socioOutroTime = document.getElementById("socioOutroTime").value;
    let temFilhos = document.getElementById("temFilhos").value;
    let tipoCarteirinha = document.getElementById("tipoCarteirinha").value;
    let deficiencia = document.getElementById("deficiencia").value.trim();
    let frequenciaEstadio = document.getElementById("frequenciaEstadio").value.trim();
    let foiMorumbi = document.getElementById("foiMorumbi").value;
    let sugestoes = document.getElementById("sugestoes").value.trim();

    if (cpf === "" || !validarCPF(cpf)) {
        alert("CPF inválido.");
        return false;
    }

    if (email === "" || !validarEmail(email)) {
        alert("E-mail inválido.");
        return false;
    }

    if (cep === "" || !/^\d{5}-?\d{3}$/.test(cep)) {
        alert("CEP inválido.");
        return false;
    }

    if (telefone === "" || !/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(telefone)) {
        alert("Telefone inválido.");
        return false;
    }

    if (idade === "" || isNaN(idade) || parseInt(idade) <= 0) {
        alert("Idade inválida.");
        return false;
    }

    // Se passou por todas as validações
    alert("Formulário validado com sucesso!");
    return true;
}

// Validação de CPF simples (formato, não verificação de dígitos)
function validarCPF(cpf) {
    return /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(cpf);
}

// Validação básica de e-mail
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}





