const container = document.querySelector(".container");
let image = document.querySelector(".image");
console.lof(image);
let comp = 0;
image.addEventListener("click", () => {
    if (comp === 0) {
       img.setAttribute("src", "Atm Image(2).jpg")
        comp = 1
    }
    else {
        img.setAttribute("src", "Atm Image(3).ipj")
        comp = 0
    }
})