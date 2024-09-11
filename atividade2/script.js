function verificarRespostas() {
    // Definição das respostas corretas (índices dos valores dos botões de rádio)
    const respostasCorretas = [2, 2, 2, 1, 1, 3, 3, 2, 2, 2];
    
    let acertos = 0;
    let erros = 0;
    
    // Loop para verificar as respostas
    for (let i = 1; i <= 10; i++) {
        let radios = document.getElementsByName('pergunta' + i);
        let respostaSelecionada = Array.from(radios).find(radio => radio.checked);
        
        if (respostaSelecionada) {
            let valorSelecionado = parseInt(respostaSelecionada.value);
            if (valorSelecionado === respostasCorretas[i - 1]) {
                acertos++;
            } else {
                erros++;
            }
        } else {
            erros++; // Conta como erro se nenhuma resposta for selecionada
        }
    }
    
    // Armazenando resultados no localStorage
    localStorage.setItem("acertos", acertos);
    localStorage.setItem("erros", erros);
    
    // Redirecionando para a página de resultados
    window.location.href = "resultado.html";
}
