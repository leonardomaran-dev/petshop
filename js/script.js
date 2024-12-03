document.querySelectorAll('.doubt').forEach(div => {
    div.addEventListener('click', () => {

        const p = div.querySelector('p');

        if (p) {
            p.classList.toggle('hidden');
        }
    });
});

// MENU COLLAPSE

const menu = document.getElementById("menu");

document.getElementById("menu-icon").addEventListener("click", function () {

    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("visible");
    } else {
        menu.classList.remove("visible");
        menu.classList.add("hidden");
    }
});

// TO HIDE MENU AFTER CLICK ON 'li'

document.querySelectorAll('.li').forEach(tag => {
    tag.addEventListener('click', () => {
        menu.classList.remove("visible");
        menu.classList.add("hidden");
    })
})
