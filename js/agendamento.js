document.addEventListener('DOMContentLoaded', () => {
    const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    const consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    const pacienteInput = document.getElementById('pacienteInput');  // novo
    const dataInput = document.getElementById('dataConsulta');
    const tabela = document.getElementById('listaConsultas');
    const form = document.getElementById('agendarForm');


    const dataList = document.getElementById('listaPacientes');
    pacientes.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.nome_usuario;          // o que aparece na sugestão
        dataList.appendChild(opt);
    });


    /* --------- Exibe consultas já salvas --------- */
    renderTabela();

    /* --------- Submit do formulário --------- */
    form.addEventListener('submit', e => {
        e.preventDefault();

        const nomeDigitado = pacienteInput.value.trim();
        const pacienteIdx  = pacientes.findIndex(p => p.nome_usuario === nomeDigitado);

        if (pacienteIdx === -1) {
            alert("Paciente não encontrado. Digite exatamente como está cadastrado.");
            return;
        }

        const dataStr = dataInput.value;
        const paciente = pacientes[pacienteIdx];

        /* 1) Verifica faltas */
        const faltas = paciente.faltas || 0;

        /* 2) Se >=3, exige 15 dias */
        if (faltas >= 3) {
        const hoje = new Date();
        const dataEscolhida = new Date(dataStr);
        const diffMs = dataEscolhida - hoje;
        const diffDias = diffMs / (1000 * 60 * 60 * 24);

        if (diffDias < 15) {
            alert(`⚠️ ${paciente.nome_usuario} tem ${faltas} faltas.\nSó pode reagendar após 15 dias.`);
            return;
        }
        }

        /* 3) Salva consulta */
        consultas.push({
        pacienteIdx,                  // vínculo com array de pacientes
        data: dataStr,
        status: 'Marcada'             // outros valores: 'Compareceu', 'Faltou'
        });
        localStorage.setItem('consultas', JSON.stringify(consultas));
        alert('Consulta agendada!');
        renderTabela();
        form.reset();
    });

    /* --------- Funções auxiliares --------- */

    function renderTabela() {
        tabela.innerHTML = '';
        consultas.forEach((c, i) => {
        const tr = document.createElement('tr');
        const paciente = pacientes[c.pacienteIdx];

        tr.innerHTML = `
            <td>${paciente?.nome_usuario || 'Desconhecido'}</td>
            <td>${c.data}</td>
            <td>${c.status}</td>
        <td>
            ${c.status === 'Marcada'
                ? `<button data-acao="compareceu" data-idx="${i}">Compareceu</button>
                <button data-acao="faltou" data-idx="${i}">Faltou</button>`
                : '-'}
            <button data-acao="excluir" data-idx="${i}">Excluir</button>
        </td>`;
        tabela.appendChild(tr);
        });
    }

    /* Delegação de eventos para botões Compareceu/Faltou */
    tabela.addEventListener('click', e => {
        if (e.target.tagName !== 'BUTTON') return;
        const idx = e.target.getAttribute('data-idx');
        const acao = e.target.getAttribute('data-acao');
        const consulta = consultas[idx];
        const paciente = pacientes[consulta.pacienteIdx];

        if (acao === 'compareceu') {
        consulta.status = 'Compareceu';
        } else if (acao === 'faltou') {
        consulta.status = 'Faltou';
        paciente.faltas = (paciente.faltas || 0) + 1;
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
        } else if (acao === 'excluir') {
            if (consulta.status === 'Faltou') {               // desfaz falta se existir
                paciente.faltas = Math.max(0, (paciente.faltas || 0) - 1);
                localStorage.setItem('pacientes', JSON.stringify(pacientes));
            }
            consultas.splice(idx, 1);                         // remove a consulta
            localStorage.setItem('consultas', JSON.stringify(consultas));
        }
        
        renderTabela();
    });
});
