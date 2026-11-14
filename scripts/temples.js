const menuButton = document.getElementById('navigation');
const navigation = document.querySelector('.navigation-menu');
const lastModified = document.querySelector('#lastModified');
const currentYear = document.getElementById('currentyear');

menuButton.addEventListener('click', () => {
    if (navigation.classList.contains('open')) {
        navigation.classList.remove('open');
        menuButton.textContent = '☰'
    }

    else {
        navigation.classList.add('open');
        menuButton.textContent = 'X';

    }
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;