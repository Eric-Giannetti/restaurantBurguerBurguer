const menuItems = document.querySelectorAll('a');

menuItems.forEach(function (item) {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const elemente = event.target;
    const id = elemente.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 59,
        behavior: "smooth"
    });
}