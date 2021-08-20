const steps = Array.from(document.querySelectorAll('.form-steps .form-step'));
const nextBtn = document.querySelectorAll('.form-steps .next');
const prevBtn = document.querySelectorAll('.form-steps .prev');

nextBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        changeStep('next');
    });
});

prevBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        changeStep('prev');
    });
});

function changeStep(btn) {
    let index = 0;
    const active = document.querySelector('.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    if (btn === 'next') {
        index++;
    } else if (btn === 'prev') {
        index--;
    }
    steps[index].classList.add('active');
}
