const quoteElement = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote-btn');

newQuoteBtn.addEventListener('click', getQuote);

function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteElement.textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
        });
}

// Initial fetch
getQuote();
