class post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }​​
}

function enviar() {
    let tituloSalvo = document.getElementById("titulo").value
    let autorSalvo = document.getElementById("autor").value
    let conteudoSalvo = document.getElementById("conteudo").value
    let novoPost = new post(tituloSalvo, autorSalvo, conteudoSalvo)
    let postCompleto = document.getElementById("secao")
    postCompleto.innerHTML += "<p>" + novoPost.titulo + novoPost.autor + novoPost.conteudo + "</p>"

}