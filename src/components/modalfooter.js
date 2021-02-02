
export const modalFooter = (() => {
    let footerTemplate = document.querySelector('#footer-modal');
    let creatAboutUs = document.createElement('div');
    creatAboutUs.classList.add('about-us');
    footerTemplate.appendChild(creatAboutUs);
    creatAboutUs.innerHTML = `
    <p class="about-text"><i>Onde assitir?</i> foi desenvolvido durante o Midterm Hackathon da <b>Laboratória</b> em Janeiro de 2021 pelas desenvolvedoras:</p> 
    <a href="https://www.linkedin.com/in/akemimeka/"target="_blank"><img class="photo-akemi" src="./img/akemi.jpg" alt="foto desenvolvedora Akemi"></a>
    <a href="https://www.linkedin.com/in/bianca-sherika-cavalcante-claro/" target="_blank"><img class="photo-bianca" src="./img/bianca.jpg" alt="foto desenvolvedora Bianca"></a>
    <a href="https://www.linkedin.com/in/camila-oliveira-b1985a73/"target="_blank"><img class="photo-camila" src="./img/camila.jpeg" alt="foto desenvolvedora Camila"></a>
    <a href="https://www.linkedin.com/in/caroline-shimada-7710a1138/"target="_blank"><img class="photo-carol" src="./img/carol.jpeg" alt="foto desenvolvedora Caroline"></a>
    <a href="https://www.linkedin.com/in/costahadassa/"target="_blank"><img class="photo-hadassa" src="./img/hadassa.jpeg" alt="foto desenvolvedora Hadassa"></a>
    <a href="https://www.linkedin.com/in/kauanaagostini/"target="_blank"><img class="photo-kauana" src="./img/kauana.jpg" alt="foto desenvolvedora Kauana"></a>
    <a href="https://www.linkedin.com/in/lucila-xavier-da-silva/"target="_blank"><img class="photo-lucila" src="./img/lucila.png" alt="foto desenvolvedora Lucila"></a>
    <p id="btnclose" class="btnclose">voltar</p>  
    `

    const btnClose = footerTemplate.querySelector('#btnclose');
    btnClose.addEventListener('click', (event) => {
    event.preventDefault();
    creatAboutUs.style.display = "none";
    creatAboutUs.innerHTML = "";
    })
});
