function adicionarProfessor() {
    const nome = document.getElementById("nome").value;
    const matricula = document.getElementById("matricula").value;

    if (nome && matricula) {
        //Verifico se ja existe uma lista de professores em localStorage
        let professores = JSON.parse(localStorage.getItem("professores")) || [];

        // crio um objeto professor 
        const professor = {
            id: new Date().getTime(),
            nome: nome,
            matricula: matricula
        };

        // adiciono o objeto professor a lista de professores do localStorage
        professores.push(professor);

        // atualizo a lista de professores no localSto
        localStorage.setItem("professores", JSON.stringify(professores));

        // limpo os valores aadicionados 
        document.getElementById("nome").value = "";
        document.getElementById("matricula").value = "";

        // atualizo a tabela presente na tela
        atualizarTabela();
    }
}

function excluirProfessores(id) {
    let professores = JSON.parse(localStorage.getItem("professores")) || [];

    // abro a lista de professores e seleciono oque desejo excluir 
    professores = professores.filter(professor => professor.id !== id);

    // atualizo a lista no localStor
    localStorage.setItem("professores", JSON.stringify(professores));

    // atualizo a tabela presente na tela
    //importante somente atualizar a tabela da tala após atualizar a tabela do localStor para que os dados sejam atuais
    atualizarTabela();
}


function atualizarTabela() {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";

    // pego a lista de professores
    const professores = JSON.parse(localStorage.getItem("professores")) || [];

    // percorro a lista inserindo os dados na tabela
    professores.forEach(professor => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${professor.id}</td>
            <td>${professor.nome}</td>
            <td>${professor.matricula}</td>
            <td>
                <button onclick="excluirProfessores(${professor.id})">Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(tr);
    });
}

// chamo a funcao atualiza tabela para preencher a tabela assim que a pagina for carregada.Para que seeja preenchida caso ja tenham dados no localSto
atualizarTabela();
