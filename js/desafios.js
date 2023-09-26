function adicionarDesafios() {
    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;

    if (nome && descricao) {
        let desafios = JSON.parse(localStorage.getItem("desafios")) || [];


        const desafio = {
            id: new Date().getTime(),
            nome: nome,
            descricao: descricao
        };


        desafios.push(desafio);


        localStorage.setItem("desafios", JSON.stringify(desafios));


        document.getElementById("nome").value = "";
        document.getElementById("descricao").value = "";


        atualizarTabela();
    }
}


function excluirDesafio(id) {
    let desafios = JSON.parse(localStorage.getItem("desafios")) || [];


    desafios = desafios.filter(desafio => desafio.id !== id);


    localStorage.setItem("desafios", JSON.stringify(desafios));


    atualizarTabela();
}


function atualizarTabela() {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";

    const desafios = JSON.parse(localStorage.getItem("desafios")) || [];

    desafios.forEach(desafio => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${desafio.id}</td>
            <td>${desafio.nome}</td>
            <td>${desafio.descricao}</td>
            <td>
                <button onclick="excluirDesafio(${desafio.id})">Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(tr);
    });
}


atualizarTabela();
