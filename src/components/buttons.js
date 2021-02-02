export const templateButtons = (() => {
  let buttons = document.querySelector("#page-main");
  let button = document.createElement("section");
  buttons.appendChild(button)
  button.innerHTML = `    
    <input type='button' class="category" value="Ação">
    <input type='button' class="category" value="Aventura">
    <input type='button' class="category" value="Animação">
    <input type='button' class="category" value="Romance">
    <input type='button' class="category" value="Comédia">
    <input type='button' class="category" value="Drama">
    <input type='button' class="category" value="Documentário">
    <input type='button' class="category" value="Infantil">
    <input type='button' class="category" value="Ficção cientifica">
    <input type='button' class="category" value="Terror">
    `
});
