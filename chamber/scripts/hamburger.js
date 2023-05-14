
const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});


// function toggleMenu() {
//     document.getElementById("primaryNav").classList.toggle("open");
//     document.getElementById("hamburgerBtn").classList.toggle("open");
// }

// const x = document.getElementById('hamburgerBtn');
// x.onclick = toggleMenu;