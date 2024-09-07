function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return 
    }

   campoPesquisa = campoPesquisa.toLowerCase();

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

//laço de repetição para mostrar todos os resultados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        
        resultados += `
        <div class="item-resultado">
                <h2>
                <a href="https://www.youtube.com/@Handsome.D" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link} target="_blank">Página da steam</a>
        </div>                   
`
}

    }
    

section.innerHTML = resultados;

}




