const doubt = document.querySelectorAll('.doubt');

doubt.forEach(div => {
    div.addEventListener('click', () => {

        const p = div.querySelector('p');

        if (p) {
            p.classList.toggle('hidden');
        }
    });
});