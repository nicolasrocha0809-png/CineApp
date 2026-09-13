const FILMES_MOCK = [
  {
    id: '1',
    titulo: 'The Batman',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1ZreGWF7p4CtZDFpLh7m8h9P8Uw_xP8YoD0y4DXl4Q&s=10/300/450',
    sinopse:
      'Em seu segundo ano de combate ao crime, Batman investiga a corrupção enraizada em Gotham City enquanto persegue o Charada, um assassino em série mascarado que deixa enigmas misteriosos após alvejar a elite política da cidade',
    genero: 'Suspense, Heroi',
    diretor: 'Matt Reeves',
    duracao: '176 min',
  },
  {
    id: '2',
    titulo: 'A Origem',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1yC3aZ4ARC8GaQCdlaPBoRSulKme-ujhuqLJSiEHcDapiEIyPbO2Zz8&s=10/300/450',
    sinopse:
      'Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos recebe a tarefa inversa: plantar uma ideia.',
    genero: 'Ficção Científica',
    diretor: 'Christopher Nolan',
    duracao: '148 min',
  },
  {
    id: '3',
    titulo: 'Clube da Luta',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYt-P0rI_WizClfbFr7b4nxMRIEelpuOOxAsiuzLjyEHrut7CI3UUCvEG8&s=10/300/450',
    sinopse:
      'Um homem com insonia e um vendedor de sabão formam um clube de luta clandestino que se transforma em algo muito maior.',
    genero: 'Drama',
    diretor: 'David Fincher',
    duracao: '139 min',
  },
  {
    id: '4',
    titulo: 'Coringa',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzM3ODNlNTAtYTYxNy00NjZhLTg3MGMtYTIwOWYxNzAwMzQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg/300/450',
    sinopse:
      'Em Gotham City, um comediante fracassado é levado à loucura e ao crime pela sociedade que o rejeita.',
    genero: 'Drama',
    diretor: 'Todd Phillips',
    duracao: '122 min',
  },
  {
    id: '5',
    titulo: 'Toy Story',
    poster: 'https://media.themoviedb.org/t/p/w220_and_h330_face/6hNy0GvQXWKL3etBePHZHvlSUkf.jpg/300/450',
    sinopse:
      'Toy Story acompanha o boneco caubói Woody, o brinquedo favorito de Andy, que vê seu posto ameaçado pela chegada do moderno astronauta Buzz Lightyear.',
    genero: 'Animação, Familia',
    diretor: 'John Lasseter',
    duracao: '81 min',
  },
  {
    id: '6',
    titulo: 'Circulo de Fogo',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvy9JhEyNlF0uWaDckvupcma0MVn_ZfYnj_wFVWv8rK-6ZL4oGSvU7e6E&s=10/300/450',
    sinopse:
      'Criaturas gigantes surgem do oceano para destruir a Terra. Para combatê-las, a humanidade constrói robôs gigantes controlados por dois pilotos conectados mentalmente, que se tornam a última esperança do planeta.',
    genero: 'Ação, Ficção Científica',
    diretor: 'Guillermo del Toro',
    duracao: '131 min',
  },
];

export function buscarFilmes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FILMES_MOCK);
    }, 1000);
  });
}
