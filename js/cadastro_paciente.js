document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroCompletoForm');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Cria um objeto para armazenar os dados do formulário
        const formData = {
            nome_usuario: form.nome_usuario.value,
            nome_usuario: form.nome_usuario.value,
            nome_social: form.nome_social.value,
            numero_prontuario: form.numero_prontuario.value,
            situacao_cadastro: form.situacao_cadastro.value,
            area_atendimento: form.area_atendimento.value,
            data_entrada_saida: form.data_entrada_saida.value,
            cpf: form.cpf.value,
            rg: form.rg.value,
            data_emissao: form.data_emissao.value,
            numero_certidao_nascimeto: form.numero_certidao_nascimeto.value,
            livro_folha: form.livro_folha.value,
            cartorio: form.cartorio.value,
            naturalidade: form.naturalidade.value,
            sexo: form.sexo.value,
            ocupacao: form.ocupacao.value,
            carteira_pcd: form.carteira_pcd.value,
            cartao_nis: form.cartao_nis.value,
            cartao_sus: form.cartao_sus.value,
            raca_cor: form.raca_cor.value,
            modalidade: form.modalidade.value,
            deficiencia: form.deficiencia.value,
            transtorno: form.transtorno.value,
            cid: form.cid.value,
            cep: form.cep.value,
            endereco: form.endereco.value,
            numero: form.numero.value,
            complemento: form.complemento.value,
            bairro: form.bairro.value,
            cidade: form.cidade.value,
            uf: form.uf.value,
            email: form.email.value,
            telefone: form.telefone.value,
            telefone: form.telefone.value,
            contato: form.contato.value,
            nome: form.nome.value,
            cpf: form.cpf.value,
            telefone: form.telefone.value,
            email: form.email.value,
            ocupacao: form.ocupacao.value,
            nome: form.nome.value,
            cpf: form.cpf.value,
            telefone: form.telefone.value,
            email: form.email.value,
            ocupacao: form.ocupacao.value,
            nome: form.nome.value,
            cpf: form.cpf.value,
            telefone: form.telefone.value,
            email: form.email.value,
            ocupacao: form.ocupacao.value,
            medicamentos: form.medicamentos.value,
            alergia: form.alergia.value,
            comorbidade: form.comorbidade.value,
            convenio: form.convenio.value,
            at_fisica: form.at_fisica.value,
            transporte: form.transporte.value,
            uso_imagem: form.uso_imagem.value,
            observacao: form.observacao.value,
        };

        // Obtém pacientes do localStorage ou cria um array vazio
        let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

        // Adiciona o novo paciente ao array
        pacientes.push(formData);

        // Armazena o array atualizado no localStorage
        localStorage.setItem('pacientes', JSON.stringify(pacientes));

        // Exibe uma mensagem de confirmação
        alert('Paciente cadastrado com sucesso!');

        // Opcional: Redirecionar para a página de listagem após o cadastro
        window.location.href = 'listagem.html';
    });

    document.addEventListener("DOMContentLoaded", function () {
        var telefoneInput = document.querySelector('input[name="telefone"]');

        telefoneInput.addEventListener('input', function () {
            var telefone = telefoneInput.value.replace(/\D/g, '');

            if (telefone.length > 2 && telefone[2] !== '9') {
                telefone = telefone.slice(0, 2) + '9' + telefone.slice(2);
            }

            var formattedTelefone = formatarTelefone(telefone);
            telefoneInput.value = formattedTelefone;
        });

        function formatarTelefone(telefone) {
            var formatted = telefone;

            if (telefone.length <= 2) {
                formatted = '(' + telefone;
            } else if (telefone.length <= 7) {
                formatted = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2);
            } else if (telefone.length <= 11) {
                formatted = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 5) + '-' + telefone.substr(7);
            } else {
                formatted = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 5) + '-' + telefone.substr(7, 4);
            }

            return formatted;
        }
    });
});
