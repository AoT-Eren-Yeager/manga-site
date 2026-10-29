const searchInput = document.getElementById('q');
const mangaCards = document.querySelectorAll('.manga-card');
const noResults = document.getElementById('noResults')

searchInput.addEventListener("input", function(event) {
    const query = event.target.value.toLowerCase().trim();

    let visibleCount = 0;

    mangaCards.forEach(card => {
        const title = card.dataset.title.toLowerCase();

        if (title.includes(query)) {
            card.style.display = 'flex';
            visibleCount++;
            
        } else {
            card.style.display = 'none';
        }
    });

    noResults.hidden = !(visibleCount === 0 && query !== '');
});
