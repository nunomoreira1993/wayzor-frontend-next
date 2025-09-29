document.addEventListener('DOMContentLoaded', () => {

    // Dados das estações (substitua com os seus dados e imagens reais)
    const stationsData = [
        { name: 'PDL Marina Atlântico', address: 'Av. João Bosco Mota Amaral n° 1, 767 Ponta Delgada, 9500-767', island: 'Ilha de São Miguel, Ponta Delgada', islandFilter: 'sao-miguel', image: 'images/station1.svg' },
        { name: 'PDL Sede', address: 'Rua de Lisboa, Edifício Varela - R/C, Ponta Delgada, 9500-216', island: 'Ilha de São Miguel, Ponta Delgada', islandFilter: 'sao-miguel', image: 'images/station2.svg' },
        { name: 'PDL Grand Hotel AA', address: 'Av. Infante Dom Henrique 113, Ponta Delgada, 9500-150', island: 'Ilha de São Miguel, Ponta Delgada', islandFilter: 'sao-miguel', image: 'images/station3.svg' },
        { name: 'PDL Aeroporto', address: 'Aeroporto de Ponta Delgada, São Miguel, 9500-749', island: 'Ilha de São Miguel, Ponta Delgada', islandFilter: 'sao-miguel', image: 'images/station4.svg' },
        { name: 'PDL SM Park Hotel', address: 'R. Manuel Augusto Amaral S/N, Ponta Delgada, 9500-222', island: 'Ilha de São Miguel, Ponta Delgada', islandFilter: 'sao-miguel', image: 'images/station5.svg' },
        { name: 'PDL Neat Hotel', address: 'R. Dr. José Bruno Tavares Carreiro, Ponta Delgada, 9500-119', island: 'Ilha de São Miguel, Ponta Delgada', islandFilter: 'sao-miguel', image: 'images/station6.svg' },
        { name: 'Furnas Terra Nostra', address: 'R Padre José Jacinto Botelho, n° 5 Furnas, 9675-061', island: 'Ilha de São Miguel, Furnas', islandFilter: 'sao-miguel', image: 'images/station7.svg' },
        { name: 'Faial Hotel do Canal', address: 'Largo Dr. Manuel de Arriaga, Faial, 9900-026', island: 'Ilha do Faial, Horta', islandFilter: 'faial', image: 'images/station8.svg' },
        { name: 'Terceira Mar Hotel', address: 'Portões de São Pedro, n° 1 Terceira, 9700-097', island: 'Ilha Terceira, Angra do Heroísmo', islandFilter: 'terceira', image: 'images/station9.svg' },
        { name: 'Faial Aeroporto', address: 'Castelo Branco, Horta, 9900-321', island: 'Ilha do Faial, Horta', islandFilter: 'faial', image: 'images/station10.svg' },
        { name: 'TER Aeroporto', address: 'Aerogare Civil das Lajes, Lajes, 9760-251', island: 'Ilha Terceira, Lajes', islandFilter: 'terceira', image: 'images/station11.svg' }
    ];

    const grid = document.querySelector('.stations-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

        // Função para renderizar os cartões na grelha
        function renderStations(stations) {
            grid.innerHTML = ''; // Limpa a grelha
            stations.forEach(station => {
                const card = document.createElement('article');
                card.className = 'station-card visible';
                card.setAttribute('data-island', station.islandFilter);
                // Construir URL do Google Maps para a estação
                const mapsQuery = `${station.name}, ${station.address}`;
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

                card.innerHTML = `
                    <figure class="card-image-wrapper">
                        <img src="${station.image}" alt="${station.name}">
                        <img class="location-icon" src="images/ic_pin_map.svg" alt="Open location in Google Maps" aria-label="Open location in Google Maps" role="button" tabindex="0" data-maps-url="${mapsUrl}">
                    </figure>
                    <div class="card-content">
                        <h3>${station.name}</h3>
                        <p>${station.address}</p>
                        <p class="island-name">${station.island}</p>
                    </div>
                `;
                grid.appendChild(card);

                // Liga o click/teclado ao ícone para abrir o Google Maps
                const icon = card.querySelector('.location-icon');
                if (icon && icon.dataset.mapsUrl) {
                    icon.addEventListener('click', (e) => {
                        e.stopPropagation();
                        window.open(icon.dataset.mapsUrl, '_blank', 'noopener');
                    });
                    icon.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            icon.click();
                        }
                    });
                }
            });
        }
    
    // Lógica de filtragem
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Atualiza o estado ativo do botão
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            
            // Filtra os dados
            const filteredStations = stationsData.filter(station => {
                if (filterValue === 'all') {
                    return true;
                }
                return station.islandFilter === filterValue;
            });
            
            // Renderiza os cartões filtrados
            renderStations(filteredStations);
        });
    });

    // Renderização inicial
    renderStations(stationsData);

    // Share button handler (match homepage behavior)
    const shareBtn = document.querySelector('.social__share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: document.title || 'Wayzor',
                text: 'Explore Wayzor stations in the Azores',
                url: window.location.href
            };
            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (_) {
                    // user cancelled or error; ignore
                }
            } else {
                try {
                    await navigator.clipboard.writeText(shareData.url);
                    shareBtn.innerHTML = '<img src="images/ic_share.svg" class="social__share-icon" alt="Share">Link copied!';
                    setTimeout(() => {
                        shareBtn.innerHTML = '<img src="images/ic_share.svg" class="social__share-icon" alt="Share">Share';
                    }, 1600);
                } catch (_) {
                    window.open(shareData.url, '_blank');
                }
            }
        });
    }
});