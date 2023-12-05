
for (var j = 0; j < 5; j++) {
    let css = "#servicos #recipeCarousel" + j + " .carousel .carousel-item"
    let items = document.querySelectorAll(css)
    console.log(css)
    console.log(items)
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
