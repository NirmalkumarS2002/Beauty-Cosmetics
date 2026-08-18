let sidebtn1 = document.querySelector(".hside1");
let sidebtn2 = document.querySelector(".hside2");
let image = ["./src/side1.webp","./src/side2.webp"];
let herosection = document.querySelector(".hero-section");

let index = 0;
sidebtn1.addEventListener("click", () => {
    index++;
    if (index > image.length - 1) {
        index = 0;
    }
    herosection.style.backgroundImage =  ` linear-gradient(rgba(0, 0, 0, 0.658), rgba(0, 0, 0, 0.521)),url(${image[index]})`;
});

sidebtn2.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = image.length - 1;
    }
    herosection.style.backgroundImage =  ` linear-gradient(rgba(0, 0, 0, 0.658), rgba(0, 0, 0, 0.521)),url(${image[index]})`;
});

setInterval(() => {
    index++;
    if (index >= image.length) {
        index = 0;
    }
    herosection.style.backgroundImage = ` linear-gradient(rgba(0, 0, 0, 0.658), rgba(0, 0, 0, 0.521)),url(${image[index]})`;
}, 2000);