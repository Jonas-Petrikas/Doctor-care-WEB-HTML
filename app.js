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

// // Select the header
// const header = document.getElementById('header');
 
// // Add an event listener for the scroll event
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) {
//     // Add the 'header-scrolled' class when scrolling
//     header.classList.add('header-scrolled');
//     header.classList.remove('header-normal');
//   } else {
//     // Remove the 'header-scrolled' class when back at the top
//     header.classList.remove('header-scrolled');
//     header.classList.add('header-normal');
//   }
// });
