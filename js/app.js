const header = document.querySelector(".siteheader");
const header__btn = document.querySelector(".siteheader__btn");

header__btn.addEventListener("click", function () {
    header.classList.toggle("site-nav-on");
})