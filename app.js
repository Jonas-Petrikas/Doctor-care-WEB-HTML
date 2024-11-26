console.log('hello from JS file');

const landing = document.querySelector('.landing');
const logoA = document.querySelector('.logo a');
const logoASpan = document.querySelector('.logo a span');
const NavItemTxt = document.querySelectorAll('.header-bin ul li a');
const NavButton = document.querySelector ('.header-bin button.right');


window.addEventListener('scroll', _ =>{
    landing.style.backgroundColor = 'var(--brand-green)';
    logoA.style.color = 'var(--white)';
    logoASpan.style.color = 'var(--white)';
    for(i = 0; i < NavItemTxt.length; i++){
        NavItemTxt[i].style.color = 'var(--white)';
    }
    NavButton.style.color = 'var(--white)';
    NavButton.style.backgroundColor = 'var(--brand-green)';
    NavButton.style.border = '1px solid var(--white)';


});