function adicionarEnsalamento() {
    const professor = document.getElementById("nomeSelectProfessor").value;
    const desafio = document.getElementById("nomeSelectDesafio").value;
    const periodo = document.getElementById("nomeSelectPeriodo").value;
    const curso = document.getElementById("nomeSelectCurso").value;
    const sala = document.getElementById("nomeSelectSala").value;
    const horario = document.getElementById("nomeSelectHorario").value;
    const data = document.getElementById("Data").value;
    const horaInicial = document.getElementById("horaInicial").value;
    const horaFinal = document.getElementById("horaFinal").value;
    

    if (professor && desafio && periodo && curso && sala && horario && data && horaInicial && horaFinal )  {
        //verifico se ja existe uma lista ensalamento no localStorage
        let ensalamentos = JSON.parse(localStorage.getItem("ensalamentos")) || [];

        // crio o objeto ensalamento
        const ensalamento = {
            id: new Date().getTime(),
            professor: professor,
            desafio: desafio,
            periodo: periodo,
            curso: curso,
            horario: horario,
            data: data,
            horaInicial: horaInicial,
            horaFinal: horaFinal,
            sala: sala
            
        };

        // adiciono o ensalamento na lista 
        ensalamentos.push(ensalamento);

        // atualizo o localStorage
        localStorage.setItem("ensalamentos", JSON.stringify(ensalamentos));

        //limpo as informaçoes que foram adcionadas para uma nova adicao 
        document.getElementById("nomeSelectProfessor").value = "";
        document.getElementById("nomeSelectDesafio").value = "";
        document.getElementById("nomeSelectPeriodo").value = "";
        document.getElementById("nomeSelectCurso").value = "";
        document.getElementById("nomeSelectHorario").value = "";
        document.getElementById("Data").value = "";
        document.getElementById("horaInicial").value = "";
        document.getElementById("horaFinal").value = "";
        document.getElementById("nomeSelectSala").value = "";
       

        // atualizo a tabela de ensalamentos 
        atualizarTabela();
    }
}

// excluir um ensalamento
function excluirEnsalamento(id) {
    let ensalamentos = JSON.parse(localStorage.getItem("ensalamentos")) || [];

    // filtro um ensalamento especifico para ser removido 
    ensalamentos = ensalamentos.filter(ensalamento => ensalamento.id !== id);

    // atualizo o localStorage 
    localStorage.setItem("ensalamentos", JSON.stringify(ensalamentos));

   //carrego novamente a lista na tela 
    atualizarTabela();
}

// funcao que atulizada a tabela 
function atualizarTabela() {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";

    const ensalamentos = JSON.parse(localStorage.getItem("ensalamentos")) || [];


    //percorro toda a lista por um foreach e insiro os registros da tabela
    ensalamentos.forEach(ensalamento => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${ensalamento.id}</td>
            <td>${ensalamento.professor}</td>
            <td>${ensalamento.desafio}</td>
            <td>${ensalamento.periodo}</td>
            <td>${ensalamento.curso}</td>
            <td>${ensalamento.horario}</td>
            <td>${ensalamento.data} de: ${ensalamento.horaInicial} ás ${ensalamento.horaFinal}</td>
            <td>${ensalamento.sala}</td>
            <td>
                <button onclick="excluirEnsalamento(${ensalamento.id})">Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(tr);
    });
}

// preencho os valores dos selects com as informacoes inseridas no localStorage
function preencherSelectProfessor() {
    const nomeSelect = document.getElementById("nomeSelectProfessor");
    // Limpa o select antes de preencher
    nomeSelect.innerHTML = ""; 

    const professores = JSON.parse(localStorage.getItem("professores")) || [];

    professores.forEach(professor => {
        const option = document.createElement("option");
        //preencho os values do select percorrendo a lista de professores
        option.value = professor.nome; 
        option.textContent = professor.nome;
        nomeSelect.appendChild(option);
    });
}


function preencherSelectDesafio() {
    const nomeSelect = document.getElementById("nomeSelectDesafio");
    nomeSelect.innerHTML = ""; 

    const desafios = JSON.parse(localStorage.getItem("desafios")) || [];

    desafios.forEach(desafio => {
        const option = document.createElement("option");
        option.value = desafio.nome; 
        option.textContent = desafio.nome; 
        nomeSelect.appendChild(option);
    });
}


function preencherSelectPeriodo() {
    const nomeSelect = document.getElementById("nomeSelectPeriodo");
    nomeSelect.innerHTML = ""; 

    const periodos = JSON.parse(localStorage.getItem("periodos")) || [];

    periodos.forEach(periodo => {
        const option = document.createElement("option");
        option.value = periodo.nome; 
        option.textContent = periodo.nome;
        nomeSelect.appendChild(option);
    });
}


function preencherSelectCurso() {
    const nomeSelect = document.getElementById("nomeSelectCurso");
    nomeSelect.innerHTML = "";

    const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    cursos.forEach(curso => {
        const option = document.createElement("option");
        option.value = curso.nome;
        option.textContent = curso.nome;
        nomeSelect.appendChild(option);
    });
}


function preencherSelectSala() {
    const nomeSelect = document.getElementById("nomeSelectSala");
    nomeSelect.innerHTML = "";

    const salas = JSON.parse(localStorage.getItem("salas")) || [];

    salas.forEach(sala => {
        const option = document.createElement("option");
        option.value = sala.nome;
        option.textContent = sala.nome;
        nomeSelect.appendChild(option);
    });
}


function preencherSelectHorario() {
    const nomeSelect = document.getElementById("nomeSelectHorario");
    nomeSelect.innerHTML = "";

    const horarios = JSON.parse(localStorage.getItem("horarios")) || [];

    horarios.forEach(horario => {
        const option = document.createElement("option");
        option.value = horario.nome;
        option.textContent = horario.nome;
        nomeSelect.appendChild(option);
    });
}

// chamo as funcoes criadas para que quando a pagina carregue os valores dos selects já estejam preenchidos
preencherSelectProfessor();

preencherSelectDesafio();

preencherSelectPeriodo();

preencherSelectCurso();

preencherSelectSala();

preencherSelectHorario();


// atualizo a tabela assim que abro a pagina para caso tenha informacoes ja salvas na localStorage
atualizarTabela();
