export const modalFooter = (() => {
	const footer = document.querySelector('#footer');
	let footerTemplate = document.querySelector('#footer-modal');
	let creatAboutUs = document.createElement('section');
	footerTemplate.classList.add('itemActive');
	creatAboutUs.classList.add('modal');
	footerTemplate.appendChild(creatAboutUs);
	creatAboutUs.innerHTML = `
    <p class="about-text">
      <span class="text-important">Onde Assistir?</span> foi desenvolvido durante o Midterm Hackathon da <span  class="text-important">Laboratoria</span> em Janeiro e Fevereiro de 2021 pelas devas:
		</p>
    <div class="devs-profile-container">
      <a class="link-dev" href="https://www.linkedin.com/in/akemimeka/" target="_blank">
				<img class="photo-dev" src="./assets/img/photos/akemi.jpg" alt="foto desenvolvedora Akemi">
				<figcaption class="name-dev">Akemi</figcaption>
			</a>
      <a class="link-dev" href="https://www.linkedin.com/in/bianca-sherika-cavalcante-claro/" target="_blank">
				<img class="photo-dev" src="./assets/img/photos/bianca.jpg" alt="foto desenvolvedora Bianca">
				<figcaption class="name-dev">Bianca</figcaption>
				</a>
      <a class="link-dev" href="https://www.linkedin.com/in/camila-oliveira-b1985a73/" target="_blank">
				<img class="photo-dev" src="./assets/img/photos/camila.jpeg" alt="foto desenvolvedora Camila">
				<figcaption class="name-dev">Camila</figcaption>
			</a>
      <a class="link-dev" href="https://www.linkedin.com/in/caroline-shimada-7710a1138/" target="_blank">
				<img class="photo-dev" src="./assets/img/photos/carol.jpeg" alt="foto desenvolvedora Caroline">
				<figcaption class="name-dev">Caroline</figcaption>
			</a>
      <a class="link-dev" href="https://www.linkedin.com/in/costahadassa/" target="_blank">
				<img class="photo-dev" src="./assets/img/photos/hadassa.jpeg" alt="foto desenvolvedora Hadassa">
				<figcaption class="name-dev">Hadassa</figcaption>
			</a>
      <a class="link-dev" href="https://www.linkedin.com/in/kauanaagostini/" target="_blank">
				<img class="photo-dev" src="./assets/img/photos/kauana.jpg" alt="foto desenvolvedora Kauana">
				<figcaption class="name-dev">Kauana</figcaption>
			</a>
      <a class="link-dev" href="https://www.linkedin.com/in/lucila-xavier-da-silva/" target="_blank">
				<img class="photo-dev" src="./assets/img/photos/lucila.png" alt="foto desenvolvedora Lucila">
				<figcaption class="name-dev">Lucila</figcaption>
			</a>  
	</div>
	<p class="modal-tmdb-text">Este produto usa a API TMDb, mas não é endossado ou certificado pelo
		<a id="tmdb-logo-link" href="https://www.themoviedb.org/" target="_blank"><img id="tmdb-logo" class="modal-tmdb-logo"src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" alt="Logo The Movie Database"></a>
  	.</p> 
    <button id="btn-close" class="btn-close">Voltar</button>  
    `

	const btnClose = footerTemplate.querySelector('#btn-close');
	btnClose.addEventListener('click', (event) => {
		event.preventDefault();
		footerTemplate.classList.remove('itemActive');
		footer.classList.remove('hidden');
		creatAboutUs.style.display = "none";
		creatAboutUs.innerHTML = "";
	})
});
