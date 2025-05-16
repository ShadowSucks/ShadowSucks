document.addEventListener('DOMContentLoaded', function() {
    // Load components
    fetch('../components/components.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            
            // Insert header
            const header = doc.querySelector('#header');
            document.body.insertBefore(header, document.body.firstChild);
            
            // Insert footer
            const footer = doc.querySelector('#footer');
            document.body.appendChild(footer);

            // Set active navigation link
            const currentPage = location.pathname.split('/').pop();
            document.querySelectorAll('.nav-links a').forEach(link => {
                if (link.getAttribute('href').includes(currentPage)) {
                    link.style.color = 'var(--patriotic-red)';
                    link.style.borderBottom = '2px solid var(--irgc-gold)';
                }
            });
        });

    // Revolutionary News Ticker
    const tickerContent = [
        "IRGC Aerospace Forces unveil new hypersonic missile technology",
        "Supreme Leader praises IRGC's revolutionary vigilance in public address",
        "IRGC Navy successfully thwarts pirate attack in Gulf of Aden"
    ];
    
    const ticker = document.createElement('div');
    ticker.className = 'news-ticker';
    ticker.innerHTML = `
        <marquee behavior="scroll" direction="left" scrollamount="5">
        ⚡ ${tickerContent.join(' &nbsp;|&nbsp; ')}
        </marquee>
    `;
    document.querySelector('.hero-banner').after(ticker);
});