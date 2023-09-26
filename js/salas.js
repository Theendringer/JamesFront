function adicionarSala() {
    const nome = document.getElementById("nome").value;
    const localidade = document.getElementById("localidade").value;

    if (nome && localidade) {
        let salas = JSON.parse(localStorage.getItem("salas")) || [];


        const sala = {
            id: new Date().getTime(),
            nome: nome,
            localidade: localidade
        };


        salas.push(sala);


        localStorage.setItem("salas", JSON.stringify(salas));


        document.getElementById("nome").value = "";
        document.getElementById("localidade").value = "";


        atualizarTabela();
    }
}


function excluirSala(id) {
    let salas = JSON.parse(localStorage.getItem("salas")) || [];


    salas = salas.filter(sala => sala.id !== id);


    localStorage.setItem("salas", JSON.stringify(salas));


    atualizarTabela();
}


function atualizarTabela() {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";

    const salas = JSON.parse(localStorage.getItem("salas")) || [];

    salas.forEach(sala => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${sala.id}</td>
            <td>${sala.nome}</td>
            <td>${sala.localidade}</td>
            <td>
                <button onclick="excluirSala(${sala.id})">Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(tr);
    });
}


atualizarTabela();
