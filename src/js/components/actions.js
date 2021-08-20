const messages = document.querySelectorAll('.messages');

messages.forEach((msn) => {
    msn.classList.remove('fade-out');

    msn.addEventListener('click', () => {
        msn.classList.add('fade-out');

        setTimeout(function() {
            msn.remove();
        }, 1000);
    });
});
