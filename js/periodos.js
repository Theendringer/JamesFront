function adicionarPeriodos() {
    const nome = document.getElementById("nome").value;

    if (nome) {
        let periodos = JSON.parse(localStorage.getItem("periodos")) || [];

        const periodo = {
            id: new Date().getTime(),
            nome: nome
        };


        periodos.push(periodo);

        localStorage.setItem("periodos", JSON.stringify(periodos));


        document.getElementById("nome").value = "";


        atualizarTabela();
    }
}


function excluirPeriodo(id) {
    let periodos = JSON.parse(localStorage.getItem("peridos")) || [];


    periodos = periodos.filter(periodo => periodo.id !== id);

    localStorage.setItem("periodos", JSON.stringify(periodos));


    atualizarTabela();
}


function atualizarTabela() {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";

    const periodos = JSON.parse(localStorage.getItem("periodos")) || [];

    periodos.forEach(periodo => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${periodo.id}</td>
            <td>${periodo.nome}</td>
            <td>
                <button onclick="excluirPeriodo(${periodo.id})">Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(tr);
    });
}


atualizarTabela();
