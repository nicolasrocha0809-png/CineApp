Aplicativo mobile desenvolvido em React Native com Expo para visualização e gerenciamento de filmes.

- João Guilherme Piccolo Reis — RA: 27511
- Nicolas Alencar Rocha — RA: 27617

O CineApp é um aplicativo de filmes que permite visualizar um catálogo com informações como título, gênero, duração e diretor. O usuário pode acessar os detalhes de cada filme, adicionar filmes aos favoritos e gerenciar sua lista de favoritos.

O aplicativo utiliza navegação entre telas, carregamento assíncrono de dados e armazenamento local para manter os filmes favoritados.

## Desafios bônus

Foram implementados todos os desafios bônus propostos na atividade:

- Novos campos no catálogo: gênero, duração e diretor dos filmes.
- Remoção individual de favoritos: permite remover filmes específicos da lista de favoritos.
- Estilização personalizada: utilização de botões personalizados com estilos próprios.
- Contador e estado vazio aprimorado: exibição da quantidade de filmes favoritados e tratamento da lista quando não há favoritos.

## Tecnologias utilizadas

- React Native
- Expo
- JavaScript
- React Navigation
- AsyncStorage

## Como executar o projeto:

```bash
git clone 

cd cineapp

npm install

npx expo start
(Se não funcionar utilize npm install -g ngrok e depois npx expo start --tunnel)
