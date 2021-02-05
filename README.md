
# :tv: Onde Assistir?

Acesse a aplicação aqui: https://cbalieiro.github.io/onde-assistir/

## Índice

* [Apresentação](#apresentação)
* [Design Thinking](#design-thinking)
   * [Mapeamento](#mapeamento)
      * [Investigação](#investigação)
      * [Entrevistas](#entrevistas)
      * [Pesquisas](#pesquisa)
   * [Rascunhos](#rascunhos)
   * [Decisão](#decisão)
   * [Prototipagem](#prototipagem)
   * [Testes](#testes)
* [Planejamento](#planejamento)
* [Usuários](#usuários)
   * [Personas](#personas)
   * [Histórias de usuário](#histórias-de-usuário)
* [Desenvolvimento](#desenvolvimento)
* [Pontos de Melhoria](#pontos-de-melhoria)
* [Agradecimentos](#agradecimentos)
* [Devas](#devas)

***

## Apresentação

:wave: *Onde Assistir?* é uma aplicação web que tem por objetivo auxiliar os apaixonados por séries e filmes a encontrar exatamente qual (is) streaming (s) de vídeo oferece (m) o título desejado, de forma a otimizar o tempo gasto pesquisando em cada plataforma se possui o título ou não, em seu catálogo. Este projeto foi desenvolvido por estudantes de programação Front End, através de um Hackathon proposto durante o bootcamp da Laboratória, com a finalidade de aprendizagem e enriquecimento de conhecimento das alunas.

## Design Thinking 

:bookmark_tabs: Para desenhar este projeto, utilizamos a abordagem Design Thinking, exemplificado através do fluxograma:

![](/src/img/readme/DesignerSprint.png)

### Mapeamento

:female_detective: O mapeamento foi realizado com 3 processos, Investigação, Entrevistas e Pesquisa.

#### Investigação 

:pushpin: Realizando a investigação na temática de Streaming de vídeos encontramos diversas insatisfações dos usuários.

![](/src/img/readme/insatisfações-usuarios.gif)

#### Entrevistas

:ticket: Com objetivo de identificar e caracterizar os problemas dos usuários de streaming de vídeos, realizamos 5 entrevistas individuais.

![](/src/img/readme/entrevistas2.jpg)</br>
![](/src/img/readme/entrevistas1.jpg)

#### Pesquisa

:chart_with_upwards_trend: Realizamos pesquisa de mercado através do Google Forms para identificar a amplitude e caracterização do nosso público alvo, verificamos que a maioria se encontra na faixa etária entre 19 e 39 anos e que se identifica ao gênero feminino, conforme gráficos.

![](/src/img/readme/genero.jpeg)</br>
![](/src/img/readme/idade.jpeg)

As plataformas que mais utilizadas são Netflix, Amazon Prime Video, Disney +, Globoplay, Telecine e HBO Go, nesta ordem.

![](/src/img/readme/plataforma-utilizada.jpeg)

Ao perguntar a respeito da funcionalidade da aplicação, a maioria dos respondentes se mostrou interessada

![](/src/img/readme/respostas-pesquisa.gif)

### Rascunhos

:paperclip: Realizamos Brainstorming e organização de idéias pela ferramento Miro, nele separamos as problemáticas apresentadas e soluções sugeridas pelos usuários na etapa de mapeamento

![](/src/img/readme/problemas-entrevistas.jpg)</br>
![](/src/img/readme/forms.jpg)

### Decisão 

:tada: Então tomamos a decisão de atacar a problematica de apresentar ao leitor quais streamings dispoem de cada título e montamos nosso Briefing e KanBan de background do nosso produto



### Prototipagem

:memo: Inicialmente modelamos 2 protótipos de baixa qualidade realizados em papel

![](/src/img/readme/baixa.fidelidade.jpeg)</br>
![](/src/img/readme/baixa.fidelidade2.jpeg)


Então mesclamos as características positivas de ambos e finalizamos o modelo final de protótipo de baixa fidelidade e o resultado foi este

![](/src/img/readme/baixa.fidelidade3.jpeg)

A partir dele, criamos a primeira versão do protótipo de média fidelidade que pode ser acessado aqui: http://bit.ly/prototipo-streaming

O protótipo definitivo foi finalizado após os testes de usabilidade e implementado mudanças a partir do feedback dos usuários realizados com prototipo anterior, pode ser acessado aqui: http://bit.ly/onde-assistir-teste2

### Testes

:left_speech_bubble: Com o feedback dos testes de usabilidade percebemos os seguintes problemas, e propomos as respectivas soluções:

1. Campo de busca confuso abaixo do menu Séries e Filmes;</br>
:heavy_check_mark: Solução - Mudar para abaixo do header.

2. Campo de busca em branco, confunde o que é para fazer;</br>
:heavy_check_mark: Solução - Inserir uma lupa dentro do campo de busca, evidenciando que ali é para fazer as pesquisas.

3. Emojis dos botões de classificação difíceis de enxergar;</br>
:heavy_check_mark: Solução - Aumentar o tamanho dos emojis.

4. Menu com botões muito grandes;</br>
:heavy_check_mark: Solução - Reduzir o tamanho do menu.

5. Ao clicar no botão do menu, a cor do botão clicado muda para cinza claro e onde não foi clicado fica cinza escuro, o que confundiu, pois segundo os testes, os usuários deduziram que onde está mais escuro seria o botão selecionado;</br>
:heavy_check_mark: Solução - Inveter a cor dos botões.

6. Uuário tentou clicar no ícone de indicação da plataforma, onde não havia nenhum direcionamento e não acontecia nenhum evento ao clicar;</br>
:heavy_check_mark: Solução - Interligar o link da plataforma ao ícone, para ao clicar, o usuário ser drecionado para a respectiva plataforma.

## Planejamento

:muscle: Utilizamos a ferramenta Trello para separar as tarefas e grupos de trabalhos

![](/src/img/readme/trello.jpeg)

## Usuários

:dancing_women: De acordo com a pesquisa e as entrevistas realizadas, definimos as personas e as histórias de usuário que orientaram o desenvolvimento do projeto

### Personas

Nossas proto-personas foram modeladas baseando-se na pesquisa realizada e validadas pelas entrevistas individuais

![](/src/img/readme/Persona_1.png)
![](/src/img/readme/Persona_2.png)</br>
![](/src/img/readme/Persona_3.png)
![](/src/img/readme/Persona_4.png)


### Histórias de Usuário

Nas histórias de Usuário que baseamos nossa aplicação são:

1. Eu como usuário quero assistir um determinado filme/série e desejo saber rapidamente em qual plataforma de stream está disponível.

2. Eu como usuário desejo, ao querer assistir um determinado filme ou série, saber atravez de poucos cliques, as informações de gênero, sinopse e os respectivos streamings que está disponível.


## Desenvolvimento

:gear: Para desenvolvimento deste projeto foi utilizado HTML5, CSS3 e Vanilla JavaScript, utilizando a API fornecida pelo The movie database (TMDB) com o conceito de Mobile First. 

## Pontos de melhoria

:construction: Definimos que para os próximos passos sejam feitos os seguintes aprimoramentos:

- Criar gênero *outros* que mostre somente títulos que não tenham nenhum dos generos já listados no site
- Adaptar o redirecionamento de streaming direto para pagina do título na plataforma clicada


## Devas

:octocat: Este projeto foi desenvolvido com muito carinho pelas desenvolvedoras:

:princess: <a href=“www.github.com/BiancaSherika“> Bianca Shérika</a><br/>
:princess: <a href=“www.github.com/cbalieiro>Camila Oliveira</a><br/>
:princess: <a href=“www.github.com/akemimeka>Akemi Mitsueda</a><br/>
:princess: <a href=“www.github.com/carolineshimada>Caroline Shimada</a><br/>
:princess: <a href=“www.github.com/Costahadassa>Hadassa Costa</a><br/>
:princess: <a href=“www.github.com/kauanaagostini>Kauana Agostini</a><br/>
:princess: <a href=“www.github.com/Lucilaxavier>Lucila Xavier</a><br/>
