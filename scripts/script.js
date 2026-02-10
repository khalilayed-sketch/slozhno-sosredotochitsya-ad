document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.header__theme-menu-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            document.documentElement.className = 'theme-' + theme;
            
            buttons.forEach(btn => {
                btn.classList.remove('header__theme-menu-button_active');
            });
            this.classList.add('header__theme-menu-button_active');
        });
    });
});
