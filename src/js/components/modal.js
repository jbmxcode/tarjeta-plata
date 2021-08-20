const modals = document.querySelectorAll('[data-modal]');

modals.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();

        const item = document.getElementById(element.dataset.modal);
        item.classList.add('open');
        const exits = item.querySelectorAll('.close');
        const btnsNext = item.querySelectorAll('.next');

        exits.forEach(function(exit) {
            exit.addEventListener('click', (e) => {
                e.preventDefault();
                item.classList.remove('open');
                item.classList.remove('active-end');
            });
        });

        btnsNext.forEach((next) => {
            next.addEventListener('click', (e) => {
                e.preventDefault();
                item.classList.add('active-end');
            });
        });
    });
});
