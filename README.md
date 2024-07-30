<h1 align="center">
    Equivalent-api
</h1>

<p align="center">API para medir a quantidade de calorias equivalente entre dois alimentos distintos.</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/codi-andre/equivalent-api.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/codi-andre/equivalent-api.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/codi-andre/equivalent-api.svg">
  <a href="https://github.com/codi-andre/equivalent-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/codi-andre/equivalent-api.svg">
  </a>

  <a href="https://github.com/codi-andre/equivalent-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/codi-andre/equivalent-api.svg">
  </a>
</p>

<p align="center">
  <a href="#como-utilizar">Como utilizar</a>&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;
</p>

Agradecimento especial a [Raul Melo](https://github.com/raulfdm) por realizar o tratamento dos dados e disponibilizar a [tabela TACO](http://www.nepa.unicamp.br/taco/tabela.php) em um formato versátil.

O projeto TACO (Tabela Brasileira de Composição de Alimentos), coordenado pelo Núcleo de Estudos e Pesquisas em Alimentação (NEPA) da UNICAMP e com financiamento do Ministério da Saúde – MS e do Ministério do Desenvolvimento Social e Combate à Fome – MDS, é uma iniciativa para proporcionar dados de um grande número de nutrientes em alimentos nacionais e regionais, obtidos por meio de amostragem representativa e análises realizadas por laboratórios com competência analítica comprovada por estudos interlaboratoriais, segundo critérios internacionais.

## Como utilizar

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/codi-Andre/equivalent-api.git

bun install
```

Inicie o servidor:

```bash
docker compose up
# or
bun start
```

Acesse http://localhost:3000/swagger com o seu navegador para ver a documentação da API.

## Tecnologias

Este projeto foi desenvolvido usando as seguintes tecnologias:

- [Bun](https://bun.sh/)
- [Elysia](https://elysiajs.com/)
- [Drizzle](https://orm.drizzle.team/)
