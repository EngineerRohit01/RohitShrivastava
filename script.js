document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.menu-button');
    const pages = document.querySelectorAll('.page');
    const homePage = document.getElementById('home');
    const defaultIcon = document.querySelector('[data-target="home"]');

    function showPage(target) {
        pages.forEach(page => {
            page.style.display = 'none';
        });
        const targetPage = document.getElementById(target);
        targetPage.style.display = 'flex';

        // Manage active states
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        document.querySelector(`[data-target="${target}"]`).classList.add('active');
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.dataset.target;
            showPage(target);
        });
    });

    // Set default home page and icon active state on load
    showPage('home');
    defaultIcon.classList.add('active');
});
