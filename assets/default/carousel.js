
for (var j = 1; j < 5; j++) {
    let css = "#recipeCarousel" + j + " .carousel-item";
    let items = document.querySelectorAll(css);
    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
}
function openMenu() {
    var element = document.getElementById("navbarSupportedContent");
    var body = document.getElementsByTagName("body");
    if (element.classList.contains("d-none")) {
        element.classList.remove("d-none");
        body.classList.add("overflow-hidden");
    } else {
        element.classList.add("d-none");
        body.classList.remove("overflow-hidden");
    }

}