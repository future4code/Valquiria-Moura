function enviar(event) {
    let nomeSalvo = document.getElementById("inputNome").value
    let infosAluno = document.getElementById("divDeCadastro")

    infosAluno.innerHTML += "<p>" + "Nome do Aluno: " + nomeSalvo + "</p>"

    let idadeSalvo = document.getElementById("inputIdade").value

    infosAluno.innerHTML += "<p>" + "Idade: " + idadeSalvo + "<p>"

    let telefoneSalvo = document.getElementById("inputTelefone").value

    infosAluno.innerHTML += "<p>" + "Telefone: " + telefoneSalvo + "<p>"


}