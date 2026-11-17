const searchInput = document.getElementById('q');
const mangaCards = document.querySelectorAll('.manga-card');
const noResults = document.getElementById('noResults');
const pageTitle = document.querySelector('.page-title');

if (searchInput) {
    searchInput.addEventListener("input", function(event) {
        const query = event.target.value.toLowerCase().trim();

        let visibleCount = 0;

        mangaCards.forEach(card => {
            const title = (card.dataset.title || '').toLowerCase();
            const matches = title.includes(query);

            card.style.display = matches ? 'flex' : 'none';

            if (matches) {
                visibleCount++;
            }
        });

        if (pageTitle) {
            pageTitle.style.display = query ? 'none' : 'block';
        }

        if (noResults) {
            noResults.hidden = !(visibleCount === 0 && query !== '');
        }
    });
}
