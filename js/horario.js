function adicionarHorarios() {
    const nome = document.getElementById("nome").value;

    if (nome) {
        let horarios = JSON.parse(localStorage.getItem("horarios")) || [];


        const horario = {
            id: new Date().getTime(),
            nome: nome
        };


        horarios.push(horario);


        localStorage.setItem("horarios", JSON.stringify(horarios));

        document.getElementById("nome").value = "";


        atualizarTabela();
    }
}


function excluirHorario(id) {
    let horarios = JSON.parse(localStorage.getItem("horarios")) || [];


    horarios = horarios.filter(horario => horario.id !== id);


    localStorage.setItem("horarios", JSON.stringify(horarios));


    atualizarTabela();
}


function atualizarTabela() {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";

    const horarios = JSON.parse(localStorage.getItem("horarios")) || [];

    horarios.forEach(horario => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${horario.id}</td>
            <td>${horario.nome}</td>
            <td>
                <button onclick="excluirHorario(${horario.id})">Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(tr);
    });
}


atualizarTabela();
