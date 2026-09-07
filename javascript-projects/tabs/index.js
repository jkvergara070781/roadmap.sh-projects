document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab =>{
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });

            contents.forEach(content => {
                content.setAttribute('hidden', 'true')
            });

            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            const targetContentId = tab.getAttribute('aria-controls');
            const targetContent = document.getElementById(targetContentId);
            targetContent.removeAttribute('hidden');
        });
    });
});