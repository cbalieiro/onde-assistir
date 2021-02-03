export const modalFooter = (() => {
    let footerTemplate = document.querySelector('#footer-modal');
    let creatAboutUs = document.createElement('section');
    footerTemplate.classList.add('itemActive');
    creatAboutUs.classList.add('about-us');
    footerTemplate.appendChild(creatAboutUs);
    creatAboutUs.innerHTML = `
    <p class="about-text"><i>Onde assitir?</i> foi desenvolvido durante o Midterm Hackathon da <b>Laboratória</b> em Janeiro de 2021 pelas desenvolvedoras:</p> 
    <div class="photos-devs">
        <a href="https://www.linkedin.com/in/akemimeka/" target="_blank" style="text-decoration:none"><img class="photo-akemi" src="./img/akemi.jpg" alt="foto desenvolvedora Akemi"><font size="2"><figcaption>Akemi</figcaption></font></a>
        <a href="https://www.linkedin.com/in/bianca-sherika-cavalcante-claro/" target="_blank" style="text-decoration:none"><img class="photo-bianca" src="./img/bianca.jpg" alt="foto desenvolvedora Bianca"><font size="2"><figcaption>Bianca</figcaption></font></a>
        <a href="https://www.linkedin.com/in/camila-oliveira-b1985a73/" target="_blank" style="text-decoration:none"><img class="photo-camila" src="./img/camila.jpeg" alt="foto desenvolvedora Camila"><font size="2"><figcaption>Camila</figcaption></font></a>
        <a href="https://www.linkedin.com/in/caroline-shimada-7710a1138/" target="_blank" style="text-decoration:none"><img class="photo-carol" src="./img/carol.jpeg" alt="foto desenvolvedora Caroline"><font size="2"><figcaption>Caroline</figcaption></font></a>
        <a href="https://www.linkedin.com/in/costahadassa/" target="_blank" style="text-decoration:none"><img class="photo-hadassa" src="./img/hadassa.jpeg" alt="foto desenvolvedora Hadassa"><font size="2"><figcaption>Hadassa</figcaption></font></a>
        <a href="https://www.linkedin.com/in/kauanaagostini/" target="_blank" style="text-decoration:none"><img class="photo-kauana" src="./img/kauana.jpg" alt="foto desenvolvedora Kauana"><font size="2"><figcaption>Kauana</figcaption></font></a>
        <a href="https://www.linkedin.com/in/lucila-xavier-da-silva/" target="_blank" style="text-decoration:none"><img class="photo-lucila" src="./img/lucila.png" alt="foto desenvolvedora Lucila"><font size="2"><figcaption>Lucila</figcaption></font></a>  
    </div>
        <p id="btnclose" class="btnclose">voltar</p>  
    `

    const btnClose = footerTemplate.querySelector('#btnclose');
    btnClose.addEventListener('click', (event) => {
    event.preventDefault();
    footerTemplate.classList.remove('itemActive');
    creatAboutUs.style.display = "none";
    creatAboutUs.innerHTML = "";
    })
});
