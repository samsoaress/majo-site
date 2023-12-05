
for (var i = 0; i < 5; i++) {
    debugger;
    let css = '#servicos #recipeCarousel' + i + ' .carousel .carousel-item'
    let items = document.querySelectorAll(css)

    console.lo
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
