// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    // Obtém referências para o formulário e a mensagem de sucesso
    const formulario = document.getElementById('formularioContato');
    const mensagemSucesso = document.getElementById('mensagemSucesso');
    
    // Adiciona um ouvinte de evento para quando o formulário for enviado
    formulario.addEventListener('submit', function(evento) {
        // Impede o envio padrão do formulário (que causaria o erro 405)
        evento.preventDefault();
        
        // Validação básica dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Simula o envio bem-sucedido
        console.log('Dados do formulário:');
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Data:', document.getElementById('data').value);
        
        const assuntoSelecionado = document.querySelector('input[name="assunto"]:checked');
        console.log('Assunto:', assuntoSelecionado ? assuntoSelecionado.value : 'Não selecionado');
        
        console.log('Mensagem:', mensagem);
        
        // Exibe a mensagem de sucesso
        mensagemSucesso.style.display = 'block';
        
        // Rola a página para exibir a mensagem de sucesso
        mensagemSucesso.scrollIntoView({ behavior: 'smooth' });
        
        // Limpa o formulário após 5 segundos
        setTimeout(function() {
            formulario.reset();
            mensagemSucesso.style.display = 'none';
        }, 5000);
    });
});