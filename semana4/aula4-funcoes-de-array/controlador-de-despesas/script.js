class cadastro { //Cria classe para cadastro
    constructor(valor, tipoCadastro, descricao) {
        this.valor = valor
        this.tipoCadastro = tipoCadastro
        this.descricao = descricao
    }
}

function botaoCadastrar() { //Pega valor, tipoCadastro, descricao e salva em variável. 
    let valorSalvo = document.getElementById("valor").value
    let tipoCadastroSalvo = document.getElementById("tipoCadastro").value
    let descricaoSalvo = document.getElementById("descricao").value

    if (valorSalvo = " " || descricaoSalvo === " ") { //Validação de campos vazios NÃO FUNCIONA: Aparece mesmo quando digito algo
        alert("Todos os campos são OBRIGATÓRIOS");

    } else {

        const apagarValor = document.getElementById("valor") // Apaga os campos.
        const apagarDescricao = document.getElementById("descricao")
        apagarValor.innerHTML = " "
        apagarDescricao.innerHTML = " "

        let array = [new cadastro(valorSalvo, tipoCadastroSalvo, descricaoSalvo)] //Cria instância com infos salvas e guarda em array

        //Não funciona
        // array.innerHTML = "<p>" + "Valor: " + valorSalvo + "\nTipo: " + tipoCadastroSalvo + "\nDescrição " + descricaoSalvo + "</p>"
    }

}