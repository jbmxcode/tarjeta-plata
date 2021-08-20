document.querySelectorAll('.tab-item').forEach((tab) => {
    tab.addEventListener('click', () => {
        const parent = tab.parentNode;
        const parentLevel1 = parent.parentNode;
        const parentLevel2 = parentLevel1.parentNode;
        const container = parentLevel2.querySelector('.tab-panel-container');
        const childrenList = Array.from(parent.children);
        const index = childrenList.indexOf(tab);
        container.style.transform = `translatex(-${index * 100}%)`;
        parent.querySelectorAll('.tab-item.active').forEach((activeBtn) => activeBtn.classList.remove('active'));
        tab.classList.add('active');
    });
});
