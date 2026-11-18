const searchInput = document.getElementById('q');
const mangaCards = document.querySelectorAll('.manga-card');
const noResults = document.getElementById('noResults');
const pageTitle = document.querySelector('.page-title');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');

const cardsPerPage = 5;
const pageCount = Math.ceil(mangaCards.length / cardsPerPage);
let currentPage = 0;



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


nextPage.addEventListener('click', function() {
    if (currentPage < pageCount - 1) {
        currentPage++;
        showCards();
    }
});

prevPage.addEventListener('click', function() {
    if (currentPage > 0) {
        currentPage--;
        showCards();
    }
});

function showCards() {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    
    mangaCards.forEach(function(card, index) {
        const shouldShow = index >= startIndex && index < endIndex;
    
        card.style.display = shouldShow ? 'flex' : 
        'none';
    });

    prevPage.disabled = currentPage === 0;
    nextPage.disabled = currentPage === pageCount - 1;
}

showCards();

showCards();