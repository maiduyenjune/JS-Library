// Glide
new Glide('.glide').mount()

// Mansory
window.onload = () => {
    const grid = document.querySelector('.grid-1');
    const masonry = new Masonry(grid, {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer',
        // do not use .grid-sizer in layout
        itemSelector: '.grid-item',
        percentPosition: true
    });

    masonry.on('layoutComplete', () => console.log('Layout Complete'))
};