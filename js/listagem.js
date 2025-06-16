document.addEventListener('DOMContentLoaded', () => {
    loadPacientes();
    loadFuncionarios();

    // Função para carregar e exibir a lista de funcionários
    function loadFuncionarios() {
        var funcionarios = JSON.parse(localStorage.getItem("users")) || [];
        var userList = document.getElementById("userList");

        userList.innerHTML = "";

        funcionarios.forEach((funcionario, index) => {
            var row = document.createElement("tr");

            var nomeCell = document.createElement("td");
            nomeCell.textContent = funcionario.firstname;
            row.appendChild(nomeCell);

            var sobrenomeCell = document.createElement("td");
            sobrenomeCell.textContent = funcionario.lastname;
            row.appendChild(sobrenomeCell);

            var emailCell = document.createElement("td");
            emailCell.textContent = funcionario.email;
            row.appendChild(emailCell);

            var actionsCell = document.createElement("td");

            var editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.className = "edit-button";
            editButton.onclick = function () {
                // Implementar lógica de edição se necessário
                editFuncionario(index);
            };
            actionsCell.appendChild(editButton);

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.className = "delete-button";
            deleteButton.onclick = function () {
                deleteFuncionario(index);
            };
            actionsCell.appendChild(deleteButton);

            row.appendChild(actionsCell);
            userList.appendChild(row);
        });
    }

    // Função para excluir um funcionário
    function deleteFuncionario(index) {
        let funcionarios = JSON.parse(localStorage.getItem("users")) || [];
        funcionarios.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(funcionarios));
        loadFuncionarios();
    }

    // Função para editar um funcionário
    // Função para editar um funcionário
    // Função para editar um funcionário
function editFuncionario(index) {
    let funcionarios = JSON.parse(localStorage.getItem("users")) || [];
    let funcionario = funcionarios[index];

    // Solicitar novas informações através de prompts
    let newFirstname = prompt("Digite o novo nome:", funcionario.firstname);
    let newLastname = prompt("Digite o novo sobrenome:", funcionario.lastname);
    let newEmail = prompt("Digite o novo email:", funcionario.email);

    // Verificar se o usuário forneceu novos valores e atualizar
    if (newFirstname !== null && newFirstname.trim() !== "") {
        funcionario.firstname = newFirstname.trim();
    }
    if (newLastname !== null && newLastname.trim() !== "") {
        funcionario.lastname = newLastname.trim();
    }
    if (newEmail !== null && newEmail.trim() !== "") {
        funcionario.email = newEmail.trim();
    }

    // Atualizar o localStorage e recarregar a lista de funcionários
    funcionarios[index] = funcionario;
    localStorage.setItem("users", JSON.stringify(funcionarios));
    loadFuncionarios();
}



    // Função para carregar e exibir a lista de pacientes
    function loadPacientes() {
        var patientList = document.getElementById("patientList");
        if (!patientList) return;
    
        var pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
        patientList.innerHTML = "";
    
        pacientes.forEach((paciente, index) => {
            var row = document.createElement("tr");
    
            // Nome
            var nomeCell = document.createElement("td");
            nomeCell.textContent = paciente.nome_usuario;
            row.appendChild(nomeCell);
    
            // CID
            var cidCell = document.createElement("td");
            cidCell.textContent = paciente.cid10;
            row.appendChild(cidCell);
    
            // Data de nascimento
            var dataNascimentoCell = document.createElement("td");
            dataNascimentoCell.textContent = paciente.data_nascimento;
            row.appendChild(dataNascimentoCell);
    
            // Nome do responsável
            var nomeResponsavelCell = document.createElement("td");
            nomeResponsavelCell.textContent = paciente.nome_responsavel;
            row.appendChild(nomeResponsavelCell);
    
            // Telefone (de recados)
            var telefoneCell = document.createElement("td");
            telefoneCell.textContent = paciente.telefone_recados;
            row.appendChild(telefoneCell);
    
            // Ações (Editar, Excluir)
            var actionsCell = document.createElement("td");
    
            var editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.className = "edit-button";
            editButton.onclick = function () {
                editPaciente(index);
            };
            actionsCell.appendChild(editButton);
    
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.className = "delete-button";
            deleteButton.onclick = function () {
                deletePaciente(index);
            };
            actionsCell.appendChild(deleteButton);
    
            row.appendChild(actionsCell);
    
            patientList.appendChild(row);
        });
    }
    

    // Função para excluir um paciente
    function deletePaciente(index) {
        let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
        pacientes.splice(index, 1);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
        loadPacientes();
    }

    // Função para editar um paciente
    // Função para editar um paciente
    function editPaciente(index) {
        let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
        let paciente = pacientes[index];

        // Solicitar novas informações através de prompts    
        let newNomeUsuario = prompt("Digite o novo nome:", paciente.nome_usuario);
        let newNomeSocial = prompt("Digite o novo nome social:", paciente.nome_social);
        let newNumeroProntuario = prompt("Digite o novo número do prontuário:", paciente.numero_prontuario);
        let newSituacaoCadastro = prompt("Digite a nova situação de cadastro:", paciente.situacao_cadastro);
        let newAreaAtendimento = prompt("Selecione a nova área de atendimento:", paciente.area_atendimento);
        let newDataEntradaSaida = prompt("Digite a nova data de entrada e saída:", paciente.data_entrada_saida);
        let newCpf = prompt("Digite o novo cpf", paciente.cpf);
        let newRg = prompt("Digite o novo rg", paciente.rg);
        let newDataEmissaoRg = prompt("Digite a nova data de emissão do RG", paciente.data_emissao_rg);
        let newNumeroCertidaoNascimento = prompt("Digite o novo número da certidão de nascimento:", paciente.numero_certidao_nascimento);
        let newLivroFolha = prompt("Digite o novo livro/folha", paciente.livro_folha);
        let newCartorio = prompt("Digite o novo cartório:", paciente.cartorio);
        let newNaturalidade = prompt("Digite a nova naturalidade:", paciente.naturalidade);
        let newSexo = prompt("Digite o novo sexo:", paciente.sexo);
        let newDataNascimento = prompt("Digite a nova data de nascimento:", paciente.dataNascimento);
        let newOcupacao = prompt("Digite a nova ocupação:", paciente.ocupacao);
        let newNumeroCarteiraPCD = prompt("Digite o novo número da carteira PCD:", paciente.numero_carteira_pcd);
        let newNumeroCartaoNIS = prompt("Digite o novo número do cartão NIS:", paciente.numero_cartao_nis);
        let newNumeroCartaoSUS = prompt("Digite o novo número do cartão do SUS:", paciente.numero_cartao_sus);
        let newRacaCor = prompt("Digite a nova raça/cor:", paciente.raca_cor);
        let newModalidade = prompt("Selecione a nova modalidade:", paciente.modalidade);
        let newTipoDeficiencia = prompt("Selecione a nova deficiência", paciente.tipo_deficiencia);
        let newTranstorno = prompt("Selecione o novo transtorno", paciente.transtorno);
        let newCid10 = prompt("Digite o novo CID 10:", paciente.cid10);
        let newCid11 = prompt("Digite o novo CID 11:", paciente.cid11);
        let newCep = prompt("Digite o novo CEP:", paciente.cep);
        let newEndereco = prompt("Digite o novo endereço:", paciente.endereco);
        let newNumero = prompt("Digite o novo número:", paciente.numero);
        let newComplemento = prompt("Digite o novo complemento:", paciente.complemento);
        let newBairro = prompt("Digite o novo bairro:", paciente.bairro);
        let newCidade = prompt("Digite a nova cidade:", paciente.cidade);
        let newUf = prompt("Digite a nova UF:", paciente.uf);
        let newEmail = prompt("Digite o novo e-mail:", paciente.email);
        let newTelefoneResidencial = prompt("Digite o novo telefone residencial:", paciente.telefone_residencial);
        let newTelefoneRecados = prompt("Digite o novo telefone para recados:", paciente.telefone_recados);
        let newPessoaContato = prompt("Digite a nova pessoa de contato:", paciente.pessoa_contato);

        // Dados Mãe
        let newNomeMae = prompt("Digite o novo nome da mãe:", paciente.nome_mae);
        let newCpfMae = prompt("Digite o novo CPF da mãe:", paciente.cpf_mae);
        let newTelefoneMae = prompt("Digite o novo telefone da mãe:", paciente.telefone_mae);
        let newEmailMae = prompt("Digite o novo e-mail da mãe:", paciente.email_mae);
        let newOcupacaoMae = prompt("Digite a nova ocupação da mãe:", paciente.ocupacao_mae);

        // Dados Pai
        let newNomePai = prompt("Digite o novo nome do pai:", paciente.nome_pai);
        let newCpfPai = prompt("Digite o novo CPF do pai:", paciente.cpf_pai);
        let newTelefonePai = prompt("Digite o novo telefone do pai:", paciente.telefone_pai);
        let newEmailPai = prompt("Digite o novo e-mail do pai:", paciente.email_pai);
        let newOcupacaoPai = prompt("Digite a nova ocupação do pai:", paciente.ocupacao_pai);

        // Dados Responsável
        let newNomeResponsavel = prompt("Digite o novo nome do responsável:", paciente.nome_responsavel);
        let newCpfResponsavel = prompt("Digite o novo CPF do responsável:", paciente.cpf_responsavel);
        let newTelefoneResponsavel = prompt("Digite o novo telefone do responsável:", paciente.telefone_responsavel);
        let newEmailResponsavel = prompt("Digite o novo e-mail do responsável:", paciente.email_responsavel);
        let newOcupacaoResponsavel = prompt("Digite a nova ocupação do responsável:", paciente.ocupacao_responsavel);

        // Questionário
        let newUtilizaMedicamentos = prompt("Utiliza medicamentos? (sim/não/não informado):", paciente.utiliza_medicamentos);
        let newQualMedicamento = prompt("Qual medicamento?", paciente.qual_medicamento);
        let newPossuiAlergia = prompt("Possui alergia? (sim/não/não informado):", paciente.possui_alergia);
        let newQualAlergia = prompt("Qual alergia?", paciente.qual_alergia);
        let newPossuiComorbidade = prompt("Possui comorbidade? (sim/não/não informado):", paciente.possui_comorbidade);
        let newQualComorbidade = prompt("Qual comorbidade?", paciente.qual_comorbidade);
        let newPossuiConvenioMedico = prompt("Possui convênio médico? (sim/não/não informado):", paciente.possui_convenio_medico);
        let newQualConvenio = prompt("Qual convênio?", paciente.qual_convenio);
        let newLiberadoAtividadeFisica = prompt("Liberado para atividade física? (sim/não/não informado):", paciente.liberado_atividade_fisica);
        let newDataLiberacaoAtividadeFisica = prompt("Data de liberação para atividade física:", paciente.data_liberacao_atividade_fisica);
        let newMeioTransporteIda = prompt("Meio de transporte (ida):", paciente.meio_transporte_ida);
        let newMeioTransporteVolta = prompt("Meio de transporte (volta):", paciente.meio_transporte_volta);
        let newAutorizacaoUsoImagem = prompt("Autorização de uso de imagem? (sim/não/não informado):", paciente.autorizacao_uso_imagem);
        let newObservacoes = prompt("Observações:", paciente.observacoes);
        let newArquivo = prompt("Selecione um arquivo (caminho do arquivo):", paciente.arquivo);


        // Atualizar o objeto paciente se novos valores forem fornecidos
        paciente.nome_usuario = newNome !== null && newNome.trim() !== "" ? newNome.trim() : paciente.nome_usuario;
        paciente.nome_social = newNomeSocial !== null && newNomeSocial.trim() !== "" ? newNomeSocial.trim() : paciente.nome_social;
        paciente.numero_prontuario = newNumeroProntuario !== null && newNumeroProntuario.trim() !== "" ? newNumeroProntuario.trim() : paciente.numero_prontuario;
        paciente.situacao_cadastro = newSituacaoCadastro !== null && newSituacaoCadastro.trim() !== "" ? newSituacaoCadastro.trim() : paciente.situacao_cadastro;
        paciente.area_atendimento = newAreaAtendimento !== null && newAreaAtendimento.trim() !== "" ? newAreaAtendimento.trim() : paciente.area_atendimento;
        paciente.data_entrada_saida = newDataEntradaSaida !== null && newDataEntradaSaida.trim() !== "" ? newDataEntradaSaida.trim() : paciente.data_entrada_saida;
        paciente.cpf = newCpf !== null && newCpf.trim() !== "" ? newCpf.trim() : paciente.cpf;
        paciente.rg = newRg !== null && newRg.trim() !== "" ? newRg.trim() : paciente.rg;
        paciente.data_emissao_rg = newDataEmissaoRg !== null && newDataEmissaoRg.trim() !== "" ? newDataEmissaoRg.trim() : paciente.data_emissao_rg;
        paciente.numero_certidao_nascimento = newNumeroCertidaoNascimento !== null && newNumeroCertidaoNascimento.trim() !== "" ? newNumeroCertidaoNascimento.trim() : paciente.numero_certidao_nascimento;
        paciente.livro_folha = newLivroFolha !== null && newLivroFolha.trim() !== "" ? newLivroFolha.trim() : paciente.livro_folha;
        paciente.cartorio = newCartorio !== null && newCartorio.trim() !== "" ? newCartorio.trim() : paciente.cartorio;
        paciente.naturalidade = newNaturalidade !== null && newNaturalidade.trim() !== "" ? newNaturalidade.trim() : paciente.naturalidade;
        paciente.sexo = newSexo !== null && newSexo.trim() !== "" ? newSexo.trim() : paciente.sexo;
        paciente.dataNascimento = newDataNascimento !== null && newDataNascimento.trim() !== "" ? newDataNascimento.trim() : paciente.dataNascimento;
        paciente.ocupacao = newOcupacao !== null && newOcupacao.trim() !== "" ? newOcupacao.trim() : paciente.ocupacao;
        paciente.numero_carteira_pcd = newNumeroCarteiraPCD !== null && newNumeroCarteiraPCD.trim() !== "" ? newNumeroCarteiraPCD.trim() : paciente.numero_carteira_pcd;
        paciente.numero_cartao_nis = newNumeroCartaoNIS !== null && newNumeroCartaoNIS.trim() !== "" ? newNumeroCartaoNIS.trim() : paciente.numero_cartao_nis;
        paciente.numero_cartao_sus = newNumeroCartaoSUS !== null && newNumeroCartaoSUS.trim() !== "" ? newNumeroCartaoSUS.trim() : paciente.numero_cartao_sus;
        paciente.raca_cor = newRacaCor !== null && newRacaCor.trim() !== "" ? newRacaCor.trim() : paciente.raca_cor;
        paciente.modalidade = newModalidade !== null && newModalidade.trim() !== "" ? newModalidade.trim() : paciente.modalidade;
        paciente.tipo_deficiencia = newTipoDeficiencia !== null && newTipoDeficiencia.trim() !== "" ? newTipoDeficiencia.trim() : paciente.tipo_deficiencia;
        paciente.transtorno = newTranstorno !== null && newTranstorno.trim() !== "" ? newTranstorno.trim() : paciente.transtorno;
        paciente.cid10 = newCid10 !== null && newCid10.trim() !== "" ? newCid10.trim() : paciente.cid10;
        paciente.cid11 = newCid11 !== null && newCid11.trim() !== "" ? newCid11.trim() : paciente.cid11;
        paciente.cep = newCep !== null && newCep.trim() !== "" ? newCep.trim() : paciente.cep;
        paciente.endereco = newEndereco !== null && newEndereco.trim() !== "" ? newEndereco.trim() : paciente.endereco;
        paciente.numero = newNumero !== null && newNumero.trim() !== "" ? newNumero.trim() : paciente.numero;
        paciente.complemento = newComplemento !== null && newComplemento.trim() !== "" ? newComplemento.trim() : paciente.complemento;
        paciente.bairro = newBairro !== null && newBairro.trim() !== "" ? newBairro.trim() : paciente.bairro;
        paciente.cidade = newCidade !== null && newCidade.trim() !== "" ? newCidade.trim() : paciente.cidade;
        paciente.uf = newUf !== null && newUf.trim() !== "" ? newUf.trim() : paciente.uf;
        paciente.email = newEmail !== null && newEmail.trim() !== "" ? newEmail.trim() : paciente.email;
        paciente.telefone_residencial = newTelefoneResidencial !== null && newTelefoneResidencial.trim() !== "" ? newTelefoneResidencial.trim() : paciente.telefone_residencial;
        paciente.telefone_recados = newTelefoneRecados !== null && newTelefoneRecados.trim() !== "" ? newTelefoneRecados.trim() : paciente.telefone_recados;
        paciente.pessoa_contato = newPessoaContato !== null && newPessoaContato.trim() !== "" ? newPessoaContato.trim() : paciente.pessoa_contato;
        paciente.nome_mae = newNomeMae !== null && newNomeMae.trim() !== "" ? newNomeMae.trim() : paciente.nome_mae;
        paciente.cpf_mae = newCpfMae !== null && newCpfMae.trim() !== "" ? newCpfMae.trim() : paciente.cpf_mae;
        paciente.telefone_mae = newTelefoneMae !== null && newTelefoneMae.trim() !== "" ? newTelefoneMae.trim() : paciente.telefone_mae;
        paciente.email_mae = newEmailMae !== null && newEmailMae.trim() !== "" ? newEmailMae.trim() : paciente.email_mae;
        paciente.ocupacao_mae = newOcupacaoMae !== null && newOcupacaoMae.trim() !== "" ? newOcupacaoMae.trim() : paciente.ocupacao_mae;
        paciente.nome_pai = newNomePai !== null && newNomePai.trim() !== "" ? newNomePai.trim() : paciente.nome_pai;
        paciente.cpf_pai = newCpfPai !== null && newCpfPai.trim() !== "" ? newCpfPai.trim() : paciente.cpf_pai;
        paciente.telefone_pai = newTelefonePai !== null && newTelefonePai.trim() !== "" ? newTelefonePai.trim() : paciente.telefone_pai;
        paciente.email_pai = newEmailPai !== null && newEmailPai.trim() !== "" ? newEmailPai.trim() : paciente.email_pai;
        paciente.ocupacao_pai = newOcupacaoPai !== null && newOcupacaoPai.trim() !== "" ? newOcupacaoPai.trim() : paciente.ocupacao_pai;
        paciente.nome_responsavel = newNomeResponsavel !== null && newNomeResponsavel.trim() !== "" ? newNomeResponsavel.trim() : paciente.nome_responsavel;
        paciente.cpf_responsavel = newCpfResponsavel !== null && newCpfResponsavel.trim() !== "" ? newCpfResponsavel.trim() : paciente.cpf_responsavel;
        paciente.telefone_responsavel = newTelefoneResponsavel !== null && newTelefoneResponsavel.trim() !== "" ? newTelefoneResponsavel.trim() : paciente.telefone_responsavel;
        paciente.email_responsavel = newEmailResponsavel !== null && newEmailResponsavel.trim() !== "" ? newEmailResponsavel.trim() : paciente.email_responsavel;
        paciente.ocupacao_responsavel = newOcupacaoResponsavel !== null && newOcupacaoResponsavel.trim() !== "" ? newOcupacaoResponsavel.trim() : paciente.ocupacao_responsavel;
        paciente.utiliza_medicamentos = newUtilizaMedicamentos !== null && newUtilizaMedicamentos.trim() !== "" ? newUtilizaMedicamentos.trim() : paciente.utiliza_medicamentos;
        paciente.qual_medicamento = newQualMedicamento !== null && newQualMedicamento.trim() !== "" ? newQualMedicamento.trim() : paciente.qual_medicamento;
        paciente.possui_alergia = newPossuiAlergia !== null && newPossuiAlergia.trim() !== "" ? newPossuiAlergia.trim() : paciente.possui_alergia;
        paciente.qual_alergia = newQualAlergia !== null && newQualAlergia.trim() !== "" ? newQualAlergia.trim() : paciente.qual_alergia;
        paciente.possui_comorbidade = newPossuiComorbidade !== null && newPossuiComorbidade.trim() !== "" ? newPossuiComorbidade.trim() : paciente.possui_comorbidade;
        paciente.qual_comorbidade = newQualComorbidade !== null && newQualComorbidade.trim() !== "" ? newQualComorbidade.trim() : paciente.qual_comorbidade;
        paciente.possui_convenio_medico = newPossuiConvenioMedico !== null && newPossuiConvenioMedico.trim() !== "" ? newPossuiConvenioMedico.trim() : paciente.possui_convenio_medico;
        paciente.qual_convenio = newQualConvenio !== null && newQualConvenio.trim() !== "" ? newQualConvenio.trim() : paciente.qual_convenio;
        paciente.liberado_atividade_fisica = newLiberadoAtividadeFisica !== null && newLiberadoAtividadeFisica.trim() !== "" ? newLiberadoAtividadeFisica.trim() : paciente.liberado_atividade_fisica;
        paciente.data_liberacao_atividade_fisica = newDataLiberacaoAtividadeFisica !== null && newDataLiberacaoAtividadeFisica.trim() !== "" ? newDataLiberacaoAtividadeFisica.trim() : paciente.data_liberacao_atividade_fisica;
        paciente.meio_transporte_ida = newMeioTransporteIda !== null && newMeioTransporteIda.trim() !== "" ? newMeioTransporteIda.trim() : paciente.meio_transporte_ida;
        paciente.meio_transporte_volta = newMeioTransporteVolta !== null && newMeioTransporteVolta.trim() !== "" ? newMeioTransporteVolta.trim() : paciente.meio_transporte_volta;
        paciente.autorizacao_uso_imagem = newAutorizacaoUsoImagem !== null && newAutorizacaoUsoImagem.trim() !== "" ? newAutorizacaoUsoImagem.trim() : paciente.autorizacao_uso_imagem;
        paciente.observacoes = newObservacoes !== null && newObservacoes.trim() !== "" ? newObservacoes.trim() : paciente.observacoes;
        paciente.arquivo = newArquivo !== null && newArquivo.trim() !== "" ? newArquivo.trim() : paciente.arquivo;

        // Atualizar o localStorage e recarregar a lista de pacientes
        pacientes[index] = paciente;
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
        loadPacientes();
}


    // Função para mostrar detalhes do paciente
    function showDetails(paciente) {
        const detailCard = document.getElementById("detail-card");
        const detailContent = document.getElementById("detail-content");

        detailContent.innerHTML = `
            <h3>Detalhes do Paciente</h3>
            <p><strong>Nome:</strong> ${paciente.nome_usuario}</p>
            <p><strong>Nome Social:</strong> ${paciente.nome_social}</p>
            <p><strong>Número do prontuário:</strong> ${paciente.numero_prontuario}</p>
            <p><strong>Situação do cadastro:</strong> ${paciente.situacao_cadastro}</p>
            <p><strong>Área de atendimento:</strong> ${paciente.area_atendimento}</p>
            <p><strong>Data de entrada e saída:</strong> ${paciente.data_entrada_saida}</p>
            <p><strong>CPF:</strong> ${paciente.cpf}</p>
            <p><strong>RG:</strong> ${paciente.rg}</p>
            <p><strong>Data de emissão do RG:</strong> ${paciente.data_emissao_rg}</p>
            <p><strong>Número da certidão de nascimento:</strong> ${paciente.numero_certidao_nascimento}</p>
            <p><strong>Livro/folha:</strong> ${paciente.livro_folha}</p>
            <p><strong>Cartório:</strong> ${paciente.cartorio}</p>
            <p><strong>Naturalidade:</strong> ${paciente.naturalidade}</p>
            <p><strong>Sexo:</strong> ${paciente.sexo}</p>
            <p><strong>Data de nascimento:</strong> ${paciente.data_nascimento}</p>
            <p><strong>Ocupação:</strong> ${paciente.ocupacao}</p>
            <p><strong>Número carteira PCD:</strong> ${paciente.numero_carteira_pcd}</p>
            <p><strong>Número cartão NIS:</strong> ${paciente.numero_cartao_nis}</p>
            <p><strong>Número cartão do SUS(CNUS):</strong> ${paciente.numero_cartao_sus}</p>
            <p><strong>Raça/cor:</strong> ${paciente.raca_cor}</p>
            <p><strong>Modalidade:</strong> ${paciente.modalidade}</p>
            <p><strong>Tipo de deficiência:</strong> ${paciente.tipo_deficiencia}</p>
            <p><strong>Transtorno:</strong> ${paciente.transtorno}</p>
            <p><strong>CID 10:</strong> ${paciente.cid10}</p>
            <p><strong>CID 11:</strong> ${paciente.cid11}</p>
            <p><strong>CEP:</strong> ${paciente.cep}</p>
            <p><strong>Endereço:</strong> ${paciente.endereco}</p>
            <p><strong>Número:</strong> ${paciente.numero}</p>
            <p><strong>Complemeto:</strong> ${paciente.complemento}</p>
            <p><strong>Bairro:</strong> ${paciente.bairro}</p>
            <p><strong>Cidade:</strong> ${paciente.cidade}</p>
            <p><strong>UF:</strong> ${paciente.uf}</p>
            <p><strong>E-mail:</strong> ${paciente.email}</p>
            <p><strong>Telefone residencial:</strong> ${paciente.telefone_residencial}</p>
            <p><strong>Telefone recados:</strong> ${paciente.telefone_recados}</p>
            <p><strong>Pessoa de contato:</strong> ${paciente.pessoa_contato}</p>

            <p><strong>Nome:</strong> ${paciente.nome_mae}</p>
            <p><strong>CPF:</strong> ${paciente.cpf_mae}</p>
            <p><strong>Telefone:</strong> ${paciente.telefone_mae}</p>
            <p><strong>E-mail:</strong> ${paciente.email_mae}</p>
            <p><strong>Ocupação:</strong> ${paciente.ocupacao_mae}</p>

            <p><strong>Nome:</strong> ${paciente.nome_pai}</p>
            <p><strong>CPF:</strong> ${paciente.cpf_pai}</p>
            <p><strong>Telefone:</strong> ${paciente.telefone_pai}</p>
            <p><strong>E-mail:</strong> ${paciente.email_pai}</p>
            <p><strong>Ocupação:</strong> ${paciente.ocupacao_pai}</p>

            <p><strong>Nome:</strong> ${paciente.nome_responsavel}</p>
            <p><strong>CPF:</strong> ${paciente.cpf_responsavel}</p>
            <p><strong>Telefone:</strong> ${paciente.telefone_responsavel}</p>
            <p><strong>E-mail:</strong> ${paciente.email_responsavel}</p>
            <p><strong>Ocupação:</strong> ${paciente.ocupacao_responsavel}</p>

            <p><strong>Utiliza medicamentos?</strong> ${paciente.utiliza_medicamentos}</p>
            <p><strong>Qual?</strong> ${paciente.qual_medicamento}</p>
            <p><strong>Possui alergia?</strong> ${paciente.possui_alergia}</p>   
            <p><strong>Qual?</strong> ${paciente.qual_alergia}</p>
            <p><strong>Possui comorbidade?</strong> ${paciente.possui_comorbidade}</p>
            <p><strong>Qual?</strong> ${paciente.qual_comorbidade}</p>
            <p><strong>Possui convênio médico?</strong> ${paciente.possui_convenio_medico}</p>
            <p><strong>Qual?</strong> ${paciente.qual_convenio}</p>
            <p><strong>Liberado atividade física?</strong> ${paciente.liberado_atividade_fisica}</p> 
            <p><strong>Data da liberação:</strong> ${paciente.data_liberacao_atividade_fisica}</p>
            <p><strong>Meio de transporte (ida):</strong> ${paciente.meio_transporte_ida}</p>
            <p><strong>Meio de transporte (volta):</strong> ${paciente.meio_transporte_volta}</p>
            <p><strong>Autorização uso de imagem:</strong> ${paciente.autorizacao_uso_imagem}</p>
            <p><strong>Observações:</strong> ${paciente.observacoes}</p>
            <p><strong>Selecione um arquivo (caminho do arquivo):</strong> ${paciente.arquivo}</p>
        `;

        detailCard.style.display = 'block';
    }

    // Função para fechar o card de detalhes
    window.closeDetails = function () {
        const detailCard = document.getElementById("detail-card");
        detailCard.style.display = 'none';
    }
});