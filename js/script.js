const menubtn = document.querySelector(".menu-btn")
const closebtn = document.querySelector(".close-btn")
const headsidebar = document.querySelector(".head-sidebar")
const body = document.querySelector("body")
const header = document.querySelector(".header")

menubtn.addEventListener("click", () => {
    headsidebar.classList.add("active")

})

closebtn.addEventListener("click", () => {
    headsidebar.classList.remove("active")
})


window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList.add("active")
    }

    else {
        header.classList.remove("active")
    }
})
