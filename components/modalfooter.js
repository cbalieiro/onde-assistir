export const modalFooter = (() => {
	let footerTemplate = document.querySelector('#footer-modal');
	let creatAboutUs = document.createElement('section');
	footerTemplate.classList.add('itemActive');
	creatAboutUs.classList.add('about-us');
	footerTemplate.appendChild(creatAboutUs);
	creatAboutUs.innerHTML = `
    <p class="about-text">
      <span class="text-important">Onde Assistir?</span> foi desenvolvido durante o Midterm Hackathon da <span  class="text-important">Laboratoria</span> em Janeiro e Fevereiro de 2021 pelas devas:
		</p>
    <div class="devs-profile-container">
      <a class="link-dev" href="https://www.linkedin.com/in/akemimeka/" target="_blank">
				<img class="photo-dev" src="./img/akemi.jpg" alt="foto desenvolvedora Akemi">
				<figcaption class="name-dev">Akemi</figcaption>
			</a>
      <a class="link-dev" href="https://www.linkedin.com/in/bianca-sherika-cavalcante-claro/" target="_blank">
				<img class="photo-dev" src="./img/bianca.jpg" alt="foto desenvolvedora Bianca">
				<figcaption class="name-dev">Bianca</figcaption>
				</a>
      <a class="link-dev" href="https://www.linkedin.com/in/camila-oliveira-b1985a73/" target="_blank">
				<img class="photo-dev" src="./img/camila.jpeg" alt="foto desenvolvedora Camila">
				<figcaption class="name-dev">Camila</figcaption>
			</a>
      <a class="link-dev" href="https://www.linkedin.com/in/caroline-shimada-7710a1138/" target="_blank">
				<img class="photo-dev" src="./img/carol.jpeg" alt="foto desenvolvedora Caroline">
				<figcaption class="name-dev">Caroline</figcaption>
			</a>
      <a class="link-dev" href="https://www.linkedin.com/in/costahadassa/" target="_blank">
				<img class="photo-dev" src="./img/hadassa.jpeg" alt="foto desenvolvedora Hadassa">
				<figcaption class="name-dev">Hadassa</figcaption>
			</a>
      <a class="link-dev" href="https://www.linkedin.com/in/kauanaagostini/" target="_blank">
				<img class="photo-dev" src="./img/kauana.jpg" alt="foto desenvolvedora Kauana">
				<figcaption class="name-dev">Kauana</figcaption>
			</a>
      <a class="link-dev" href="https://www.linkedin.com/in/lucila-xavier-da-silva/" target="_blank">
				<img class="photo-dev" src="./img/lucila.png" alt="foto desenvolvedora Lucila">
				<figcaption class="name-dev">Lucila</figcaption>
			</a>  
    </div>
    <button id="btnclose" class="btn-close">Voltar</button>  
    `

	const btnClose = footerTemplate.querySelector('#btnclose');
	btnClose.addEventListener('click', (event) => {
		event.preventDefault();
		footerTemplate.classList.remove('itemActive');
		creatAboutUs.style.display = "none";
		creatAboutUs.innerHTML = "";
	})
});
