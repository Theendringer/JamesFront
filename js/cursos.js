function adicionarCurso() {
    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;

    if (nome && descricao) {
        let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

        const curso = {
            id: new Date().getTime(),
            nome: nome,
            descricao: descricao
        };
        cursos.push(curso);


        localStorage.setItem("cursos", JSON.stringify(cursos));


        document.getElementById("nome").value = "";
        document.getElementById("descricao").value = "";


        atualizarTabela();
    }
}


function excluirCurso(id) {
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];


    cursos = cursos.filter(curso => curso.id !== id);


    localStorage.setItem("cursos", JSON.stringify(cursos));


    atualizarTabela();
}


function atualizarTabela() {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";

    const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    cursos.forEach(curso => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${curso.id}</td>
            <td>${curso.nome}</td>
            <td>${curso.descricao}</td>
            <td>
                <button onclick="excluirCurso(${curso.id})">Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(tr);
    });
}


atualizarTabela();
