document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroCompletoForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const getCheckboxValues = (name) => {
            return Array.from(form.querySelectorAll(`input[name="${name}"]:checked`))
                .map(checkbox => checkbox.value);
        };

        const formData = {
            nome_usuario: form.nome_usuario.value,
            nome_social: form.nome_social.value,
            numero_prontuario: form.numero_prontuario.value,
            situacao_cadastro: form.situacao_cadastro.value,
            area_atendimento: getCheckboxValues('area_atendimento'),
            data_entrada_saida: form.data_entrada_saida.value,
            cpf: form.cpf.value,
            rg: form.rg.value,
            data_emissao: form.data_emissao.value,
            numero_certidao_nascimento: form.numero_certidao_nascimento.value,
            livro_folha: form.livro_folha.value,
            cartorio: form.cartorio.value,
            naturalidade: form.naturalidade.value,
            sexo: form.sexo.value,
            data_nascimento: form.data_nascimento.value,
            ocupacao: form.ocupacao.value,
            numero_carteira_pcd: form.numero_carteira_pcd.value,
            numero_cartao_nis: form.numero_cartao_nis.value,
            numero_cartao_sus: form.numero_cartao_sus.value,
            raca_cor: form.raca_cor.value,
            modalidade: getCheckboxValues('modalidade'),
            tipo_deficiencia: getCheckboxValues('tipo_deficiencia'),
            transtorno: getCheckboxValues('transtorno'),
            cid10: form.cid10.value,
            cid10_opcional: form["cid10(opcional)"].value,
            cid11: form.cid11.value,
            cep: form.cep.value,
            endereco: form.endereco.value,
            numero: form.numero.value,
            complemento: form.complemento.value,
            bairro: form.bairro.value,
            cidade: form.cidade.value,
            uf: form.uf.value,
            email: form.email.value,
            telefone_residencial: form.telefone_residencial.value,
            telefone_recados: form.telefone_recados.value,
            pessoa_contato: form.pessoa_contato.value,

            nome_mae: form.nome_mae.value,
            cpf_mae: form.cpf_mae.value,
            telefone_mae: form.telefone_mae.value,
            email_mae: form.email_mae.value,
            ocupacao_mae: form.ocupacao_mae.value,

            nome_pai: form.nome_pai.value,
            cpf_pai: form.cpf_pai.value,
            telefone_pai: form.telefone_pai.value,
            email_pai: form.email_pai.value,
            ocupacao_pai: form.ocupacao_pai.value,

            nome_responsavel: form.nome_responsavel.value,
            cpf_responsavel: form.cpf_responsavel.value,
            telefone_responsavel: form.telefone_responsavel.value,
            email_responsavel: form.email_responsavel.value,
            ocupacao_responsavel: form.ocupacao_responsavel.value,

            utiliza_medicamentos: form.utiliza_medicamentos.value,
            qual_medicamento: form.qual_medicamento.value,
            possui_alergia: form.possui_alergia.value,
            qual_alergia: form.qual_alergia.value,
            possui_comorbidade: form.possui_comorbidade.value,
            qual_comorbidade: form.qual_comorbidade.value,
            possui_convenio_medico: form.possui_convenio_medico.value,
            qual_convenio: form.qual_convenio.value,
            liberado_atividade_fisica: form.liberado_atividade_fisica.value,
            data_liberacao_atividade_fisica: form.data_liberacao_atividade_fisica.value,
            meio_transporte_ida: form.meio_transporte_ida.value,
            meio_transporte_volta: form.meio_transporte_volta.value,
            autorizacao_uso_imagem: form.autorizacao_uso_imagem.value,
            observacoes: form.observacoes.value
        };

        let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
        pacientes.push(formData);
        localStorage.setItem('pacientes', JSON.stringify(pacientes));

        alert('Paciente cadastrado com sucesso!');
        window.location.href = 'listagem.html';
    });
});
