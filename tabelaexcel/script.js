function adicionarLinha() {
    // Obtém os valores dos inputs
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const quant = document.getElementById('quant').value;

    // Cria barreira
    if(!nome || !valor || !quant){
        alert("🐄H")
        return
    }

    // Cria uma nova linha
    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    // Adiciona células à nova linha
    const celulaNome = novaLinha.insertCell(0);
    const celulaValor = novaLinha.insertCell(1);
    const celulaQuant = novaLinha.insertCell(2);

    // Preenche as células com os valores dos inputs
    celulaNome.textContent = nome;
    celulaValor.textContent = valor;
    celulaQuant.textContent = quant;

    // Limpa os inputs
    document.getElementById('nome').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('quant').value = '';
}

function expExcel(){
    var tabela = document.getElementById("tabela")
    var nomeArquivo = "tabela_produtos.xlsx"
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de Produtos"})
    XLSX.writeFile(wb, nomeArquivo)
}