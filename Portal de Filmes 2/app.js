let url = "https://api.themoviedb.org/3/movie/popular?api_key=12facda175eebaf6b8d2640373011c7e&language=pt-BR";

const dadosFilmes = {
  "results": [
    {
      "id": 671,
      "original_language": "en",
      "original_title": "Harry Potter and the Philosopher's Stone",
      "overview": "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursley. Em seu aniversário de 11 anos ele recebe uma carta que mudará sua vida: um convite para ingressar em Hogwarts.",
      "poster_path": "/l1FfRmKRNXRSqXT5GlMo16MX2LX.jpg",
      "release_date": "2001-11-16",
      "title": "Harry Potter e a Pedra Filosofal",
      "vote_average": 7.9,
    },
    {
      "id": 767,
      "original_language": "en",
      "original_title": "Harry Potter and the Half-Blood Prince",
      "overview": "À medida que Lorde Voldemort aperta seu cerco ao mundo dos Trouxas e dos feiticeiros. Hogwarts deixou de ser um paraiso protegido. Harry suspeita que existam perigos até mesmo dentro do castelo, mas Dumbledore está mais preocupado para a batalha final que está próximo de se iniciar. Juntos, eles se esforçam para descobrir a chave que desbloqueia as defesas de Voldemort e, para isso, Dumbledore recruta seu velho amigo horace slughorn, quem, ele acredita, possuí informações valiosas a respeito. Mesmo quando um confronto decisivo se aproxima, há tempo para romance nos corações de Harry, Ron, Hermione e seus colegas de classe. O amor está no ar, mas o perigo também e Hogwarts poderá nunca mais ser a mesma.",
      "release_date": "2009-07-07",
      "poster_path": "/hTQQ5l9mxA3Rob8PTyvrNNGuj6y.jpg",
      "title": "Harry Potter e o Enigma do Príncipe",
      "vote_average": 7.7,
    },
    {
      "id": 672,
      "original_language": "en",
      "original_title": "Harry Potter and the Chamber of Secrets",
      "overview": "Carros voadores, árvores que lutam e um misterioso elfo, com um aviso ainda mais misterioso. Harry Potter está pronto para dar início ao segundo ano de sua maravilhosa jornada no mundo da bruxaria. Em Hogwarts nesse ano, aranhas falam, cartas dão broncas e a habilidade de Harry para falar com cobras voltará contra ele. De clubes de duelo a jogadores de quadribol desonestos, esse será um ano de aventura e perigo para todos. Quando a mensagem sangrenta na parede anuncia que a Câmara Secreta foi aberta, Harry, Rony e Hermione percebem que para salvar Hogwarts será preciso muita mágica e coragem. Confira essa enfeitiçante adaptação do segundo livro da obra da escritora J.K. Rowling e prepare-se para ficar petrificado quando Harry Potter demonstrar que, mais que um bruxo, é um verdadeiro herói.",
      "poster_path": "/811j0Jf2D0mK1U6RxXJoZgOB29n.jpg",
      "release_date": "2002-11-13",
      "title": "Harry Potter e a Câmara Secreta",
      "vote_average": 7.7,
    },
  ]
}

const mostraFilmes = (data) => {
  let dadosFilmes = JSON.parse(data.target.response)
  localStorage.setItem('db_filmes', data.target.response)

  let dadosHTML = '';
  for (let i = 0; i < dadosFilmes.results.length; i++) {
    let filme = dadosFilmes.results[i];
    dadosHTML += `
        <div class="card col-sm-12 col-md-4 col-lg-3">
        <h5 class="card-title" style="color: #ddd; font-size: 180%; margin-bottom: 20px;">${filme.title}</h5>
            <img id="img_filme" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="Filme">
            <div class="card-body">
              <p class="card-text">${filme.overview}</p>
              <p class="card-text">Nota: ${filme.vote_average}</p>
              <a href="detalhes.html?id=${filme.id}" class="btn btn-secondary">Veja mais...</a>
            </div>
          </div>
        `
  }
  document.getElementById('divListaFilmes').innerHTML = dadosHTML;
}

const init = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = mostraFilmes;
  xhr.open('GET', url, true);
  xhr.send();
}

window.onload = init
document.getElementById('pesquisa').onkeyup = function () {
  let query = document.getElementById('pesquisa').value
  if (query != "") {
    url = `https://api.themoviedb.org/3/search/movie?api_key=12facda175eebaf6b8d2640373011c7e&language=pt-BR&query=${query}`;
  }
  else {
    url = "https://api.themoviedb.org/3/movie/popular?api_key=12facda175eebaf6b8d2640373011c7e&language=pt-BR";
  }
  init()
}

document.getElementById("barramobile").addEventListener("submit", function(e) {
	window.location.href = `pesquisa.html?query=${document.getElementById("pesquisa").value}`;
	e.preventDefault();
});