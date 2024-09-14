document.addEventListener("DOMContentLoaded", function() {
    console.log("Site simples carregado com sucesso!");
});

// Função para calcular as possibilidades
function calcularPossibilidades(tamanhoSenha, numCaracteresPossiveis) {
    return Math.pow(numCaracteresPossiveis, tamanhoSenha);
}

// Função para pegar os valores do input e exibir o resultado
function descobrirSenha() {
    const tamanhoSenha = parseInt(document.getElementById("quantidades-numeros").value);
    const numCaracteresPossiveis = parseInt(document.getElementById("quantidades-caracteres").value);

    if (isNaN(tamanhoSenha) || isNaN(numCaracteresPossiveis)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Calcula as possibilidades
    const possibilidades = calcularPossibilidades(tamanhoSenha, numCaracteresPossiveis);

    // Exibe o resultado no h2
    document.getElementById("valor-descoberto").textContent = `O número de possibilidades é: ${possibilidades}`;
}

// Adiciona o evento de clique no botão
document.getElementById("calcular-btn").addEventListener("click", descobrirSenha);
