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


//errorpage

let errorpage = document.querySelectorAll(".errorpage")
errorpage.forEach((err) => {
    err.addEventListener("click", () => {
        window.location.href = "404.html"
    })

})

//foot form

let femail = document.querySelector("#footemail")
let fbtn = document.querySelector(".footbtn")
let ferror = document.querySelector(".ferror")


fbtn.addEventListener("click", () => {

    let fregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let ferr = true

    if (femail.value.trim() == "") {
        ferror.textContent = "Please Enter Your Email"
        ferr = false;
    }

    else if (!fregex.test(femail.value.trim())) {
        ferror.textContent = "Please Enter Your Email correctly"
        ferr = false;
    }

    if (ferr) {
        ferror.textContent = "Subscribe Successfully!"
        femail.value=""
        setTimeout(() => {
            ferror.textContent = ""
        }, 3000);
    }
})