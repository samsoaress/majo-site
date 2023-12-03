function updateCarousel() {
    var screenWidth = window.innerWidth;
    var numColumns = 1; // Default to 1 column for small screens

    if (screenWidth >= 576 && screenWidth < 768) {
        numColumns = 2;
    }

    if (screenWidth >= 768) {
        numColumns = 3;
    }

    var totalImages = 3; // Total de imagens no carrossel
    var carouselExample = document.getElementById('carouselExample');
    carouselExample.innerHTML = '';

    // Add carousel-inner only once
    var carouselInner = document.createElement('div');
    carouselInner.className = 'carousel-inner';
    carouselExample.appendChild(carouselInner);

    // Add new content based on the total number of images
    for (var i = 0; i < totalImages; i += numColumns) {
        var carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item' + (i === 0 ? ' active' : ''); // Add 'active' class to the first item
        carouselInner.appendChild(carouselItem);

        // Inside each carousel item, create a 'row' div
        var rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        carouselItem.appendChild(rowDiv);

        // Inside the 'row' div, create a 'col-md' div for each card
        for (var j = 0; j < numColumns; j++) {
            var cardDiv = document.createElement('div');
            cardDiv.className = 'col-md-' + (12 / numColumns);
            var cardIndex = i + j + 1;
            cardDiv.innerHTML = `
                <div class="card">
                    <div class="card-img">
                        <img src="//via.placeholder.com/500x400/31f?text=${cardIndex}" class="img-fluid">
                    </div>
                    <div class="card-img-overlay">Slide ${cardIndex}</div>
                </div>`;
            rowDiv.appendChild(cardDiv);
        }
    }
}

// Call the function initially
updateCarousel();

// Update the carousel on window resize
window.addEventListener('resize', updateCarousel);