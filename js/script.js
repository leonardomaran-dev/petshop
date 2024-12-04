const tela = document.getElementById("tela")
tela.innerText = window.innerWidth; 

// VIEWPORT VERIFICATION 

if (window.innerWidth > 576) {
    document.getElementById("menu-container").remove();
    document.getElementById("nav-itens").id = 'visible';
};

// DROPDOWN

document.querySelectorAll('.doubt').forEach(div => {
    div.addEventListener('click', () => {

        const p = div.querySelector('p').classList.toggle('hidden');
    });
});

// MENU COLLAPSE

const menu = document.getElementById("menu");

document.getElementById("menu-icon").addEventListener("click", function () {

    menu.classList.toggle("hidden");
});

// TO HIDE MENU AFTER CLICK ON THIS

document.querySelectorAll('.li').forEach(tag => {
    tag.addEventListener('click', () => {
        menu.classList.remove("visible");
        menu.classList.add("hidden");
    })
})




