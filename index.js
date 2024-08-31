document.addEventListener('DOMContentLoaded', () => {

    let whatsappLogo = document.querySelector('.whatsapp-logo');
    whatsappLogo.classList.add('active');
    let yogaCard = document.querySelector('#yoga-card');
    let akashicosCard = document.querySelector('#akashicos-card');
    let ebooksCard = document.querySelector('#e-books-card');
    let talleresCard = document.querySelector('#talleres-card');


    whatsappLogo.addEventListener('click', () => {
        whatsappLogo.classList.add('active');
    })

    yogaCard.addEventListener('click', (event) => {
        document.querySelector('#yoga-top').scrollIntoView({
            behavior: 'smooth'
        })
        event.preventDefault();
    });
    akashicosCard.addEventListener('click', (event) => {
        document.querySelector('#akashicos-top').scrollIntoView({
            behavior: 'smooth'
        })
        event.preventDefault();
    });
    ebooksCard.addEventListener('click', (event) => {
        document.querySelector('#e-books-top').scrollIntoView({
            behavior: 'smooth'
        })
        event.preventDefault();
    });
    talleresCard.addEventListener('click', (event) => {
        document.querySelector('#talleres-top').scrollIntoView({
            behavior: 'smooth'
        })
        event.preventDefault();
    });
});