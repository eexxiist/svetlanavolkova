document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const menuLinks = document.querySelectorAll('.header_menu_link'); // Все ссылки меню

    // Функция для закрытия меню
    function closeBurgerMenu() {
        burgerMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    }

    // Обработчик клика по бургеру
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    });

    // Обработчик клика по кнопке закрытия меню
    closeMenu.addEventListener('click', function() {
        closeBurgerMenu();
    });

    // Обработчики кликов по ссылкам меню
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Предотвращаем стандартное поведение ссылки
            event.preventDefault();

            // Закрываем меню
            closeBurgerMenu();

            // Прокручиваем к целевому блоку через setTimeout чтобы подождать закрытие меню
            const targetId = link.getAttribute('href').substring(1); // Получаем id целевого блока из href атрибута
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 300); // Даем 300ms на анимацию закрытия меню
            }
        });
    });
});
