export const templateButtons = (() => {
  let buttons = document.querySelector("#page-main");
  let button = document.createElement("section");
  button.classList.add('section-genres');
  buttons.appendChild(button)
  button.innerHTML = `    
    <input type='button' class="genre-btn genre-action" value="Ação">
    <input type='button' class="genre-btn genre-adventure" value="Aventura">
    <input type='button' class="genre-btn genre-animation" value="Animação">
    <input type='button' class="genre-btn genre-romance" value="Romance">
    <input type='button' class="genre-btn genre-comedy" value="Comédia">
    <input type='button' class="genre-btn genre-drama" value="Drama">
    <input type='button' class="genre-btn genre-doc" value="Documentário">
    <input type='button' class="genre-btn genre-kids" value="Infantil">
    <input type='button' class="genre-btn genre-sci-fi" value="Ficção Científica">
    <input type='button' class="genre-btn genre-horror" value="Terror">
    `
});
