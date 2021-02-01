export const templateButtons = (() => {
    console.log('teste');
    let cards = `    
      <input type='button' class="category" value="Ação"></input>
      <input type='button' class="category" value="Aventura"></input>
      <input type='button' class="category" value="Animação"></input>
      <input type='button' class="category" value="Romance"></input>
      <input type='button' class="category" value="Comédia"></input>
      <input type='button' class="category" value="Drama"></input>
      <input type='button' class="category" value="Documentário"></input>
      <input type='button' class="category" value="Infantil"></input>
      <input type='button' class="category" value="Ficção cientifica"></input>
      <input type='button' class="category" value="Terror"></input>
      `
    return document.querySelector("#button-genres").innerHTML = cards;
});
