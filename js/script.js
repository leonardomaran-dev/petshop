// VIEWPORT VERIFICATION 

if (window.innerWidth > 576) {
    document.getElementById("menu-container").remove();
    document.getElementById("nav-itens").id = 'visible';
};

//  MENU DROPDOWN

const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");

if (menuIcon) menuIcon.addEventListener("click", () => menu.classList.toggle("hidden"));

// TO HIDE MENU AFTER CLICK ON THIS

document.querySelectorAll('.li').forEach(tag => {
    tag.addEventListener('click', () => menu.classList.toggle("hidden"))
})

//  COLLAPSE

document.querySelectorAll('.doubt').forEach(div => {
    console.log(div);
    div.addEventListener('click', () => div.querySelector('p').classList.toggle('hidden'));
});