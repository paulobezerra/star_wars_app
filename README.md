# Star Wars App
Site dos filmes e personagens do Star Wars com React/Next.js integrado a api [httpswapi.dev](https://swapi.dev/)

## Dependências
Para esta aplicação utilizei o yarn para controlar as dependências, compilar e buildar a aplicação. Para instalar as dependências basta rodar o comando a seguir no terminal:
* `yarn`

## Rodando em dev
Para rodar a aplicação em dev basta rodar o comando a seguir no terminal:
* `yarn dev`
* 

## Rodando testes unitários
Para rodar os teste com Jest execute o comando a seguir:
* `yarn test`

## Rodando testes de integração
Para rodar os testes execute o comando a seguir no terminal:
* `yarn cypress`
* O Cypress oferece uma interface gráfica para execução dos testes
* OBS: A aplicação deve estar rodando para que os testes sejam executados
* Caso os testes não consigam ser executados exclua a pasta .next e execute a aplicação novamente

## Layout
Projetei a interface da aplicação utilizando Figma, baseado em algumas impressões do site starwars.com, segue o link:
* [https://www.figma.com/file/IQR79CmuprXP9moKeDQB1s/Star-Wars-App](https://www.figma.com/file/IQR79CmuprXP9moKeDQB1s/Star-Wars-App)

## Tecnologias
* **React**: O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
* **NextJS**: Next.js é framework de desenvolvimento front-end de código aberto criado por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.
* **TypeScript**: TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.
* **Style Components**: Permite utilizar css real para estilizar o componente sem que seja necessário mapear componente html e estilo.
* **Axios**: Cliente HTTP baseado em promessa para o navegador e node.js
* **React Icons**: Biblioteca de ícones para React que permite a importação do ES6 incluindo apenas os ícones realmente importados na aplicação.
* **Google Fonts**: Biblioteca com mais de 800 fontes livres licenciadas.
* **Yarn**: Sistema de empacotamento de software desenvolvido em 2016 pelo Facebook. Fornece velocidade, consistência, estabilidade e segurança como uma alternativa ao npm
* **DotEnv**: Módulo para carregamento de variáveis de ambiente da aplicação
* **MomentJS**: Biblioteca de para formatação de data e hora
* **Cypress**: Biblioteca de teste utilizada nos testes de integração
* **Jest**: Biblioteca de teste unitários

## Rotas das páginas
* / -> Página inicial com a listagem dos filmes
* /films/:id -> Detalhe de um film
* /people -> Listagem de personagens
* /people/:id -> Detalhe de um personagem

## Components
* ActiveLink -> Facilita na construção de menus setando className para destacar o link ativo
* Header -> Topo da página mostrado em todas as páginas do site
* Films -> Listagem de films que pode ser visto na página inicial e na página de detalhes de um personagem
* People -> Listagem de personagens que pode ser visto na listagem de personagens e na página de detalhes de um filme

## Pages
* index -> Página de listagem de filmes
* films/[id] -> Página de detalhamento do filme
* people/index -> Página de listagem de personagens
* people/[id] -> Página de detalhamento do personagem

## Services
* swapi -> Serviço de integração com a api do SWAPI

