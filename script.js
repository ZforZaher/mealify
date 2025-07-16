    const toggle = document.getElementById('mode-toggle');
    const icon = document.getElementById('mode-icon');
    const body = document.body;

    if(localStorage.getItem('mealify-mode') === 'dark') {
        body.classList.add('dark');
        toggle.checked = true;
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    toggle.addEventListener('change', () => {
        body.classList.toggle('dark');
        if(body.classList.contains('dark')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('mealify-mode', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('mealify-mode', 'light');
        }
    });
    const links = document.querySelectorAll('#navbar .container ul li a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });