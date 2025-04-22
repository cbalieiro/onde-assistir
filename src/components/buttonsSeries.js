export const templateButtonsSeries = (() => {
    let buttons = document.querySelector("#page-main");
    let button = document.createElement("section");
    button.classList.add('section-genres');
    buttons.appendChild(button)
    button.innerHTML = `    
      <button id="genre-action" class="genre-btn genre-btn-light genre-action-series" value="28">
        <img class="genre-emoji" src="./assets/img/emoji-action.png">
        &nbsp;Ação
      </button>
      <button id="genre-adventure" class="genre-btn genre-btn-light genre-adventure-series" value="12">
        <img class="genre-emoji" src="./assets/img/emoji-adventure.png">
        &nbsp;Aventura
      </button>
      <button id="genre-animation" class="genre-btn genre-btn-light genre-animation-series" value="16">
        <img class="genre-emoji" src="./assets/img/emoji-animation.png">
        &nbsp;Animação
      </button>
      <button id="genre-romance" class="genre-btn genre-btn-light genre-romance-series" value="10749">
        <img class="genre-emoji" src="./assets/img/emoji-romance.png">
        &nbsp;Romance
      </button>
      <button id="genre-comedy" class="genre-btn genre-btn-light genre-comedy-series" value="35">
        <img class="genre-emoji" src="./assets/img/emoji-comedy.png">
        &nbsp;Comédia
      </button>
      <button id="genre-drama" class="genre-btn genre-btn-dark genre-drama-series" value="18">
        <img class="genre-emoji" src="./assets/img/emoji-drama.png">
        &nbsp;Drama
      </button>
      <button id="genre-doc" class="genre-btn genre-btn-dark genre-doc-series" value="99">
        <img class="genre-emoji" src="./assets/img/emoji-doc.png">
        &nbsp;Documentário
      </button>
      <button id="genre-kids" class="genre-btn genre-btn-dark genre-kids-series" value="10762">
        <img class="genre-emoji" src="./assets/img/emoji-kids.png">
        &nbsp;Infantil
      </button>
      <button id="genre-sci-fi" class="genre-btn genre-btn-dark genre-sci-fi-series" value="10765">
        <img class="genre-emoji" src="./assets/img/emoji-sci-fi.png">
        &nbsp;Ficção Científica</button>
      <button id="genre-horror" class="genre-btn genre-btn-dark genre-horror-series" value="27">
        <img class="genre-emoji" src="./assets/img/emoji-horror.png">
        &nbsp;Terror
      </button>
      `
  });
  