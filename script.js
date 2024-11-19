console.log("Welcome to My Portfolio!");
// Получаем текущий URL-адрес
const currentUrl = window.location.pathname;

// Получаем все ссылки в хэдере
const navLinks = document.querySelectorAll('nav ul li a');

// Добавляем класс 'active' той ссылке, которая соответствует текущему URL
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentUrl.split('/').pop()) {
        link.classList.add('active');
    }
});