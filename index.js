
/*
* Hamburger menu
*/

let hamburgerButton = document.getElementById('hamburger-button');
let hamburgerMenu = document.getElementById('hamburger');

let showingHamburger = false;

hamburgerButton.addEventListener('click', function (event) {
    if (showingHamburger) {
        hamburgerMenu.classList.remove('hamburger-displayed');
        hamburgerMenu.classList.add('hamburger-not-displayed');
        showingHamburger = false;
    } else {
        hamburgerMenu.classList.remove('hamburger-not-displayed');
        hamburgerMenu.classList.add('hamburger-displayed');
        showingHamburger= true;
    }
});




