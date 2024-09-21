// Gombok kiválasztása
const buttons = document.querySelectorAll('.popup-button');

// Popup overlay és tartalom kiválasztása
const popupOverlay = document.getElementById('popup-overlay');
const popupBody = document.getElementById('popup-body');
const closeButton = document.getElementById('close-btn');

// Eseménykezelés a gombokhoz
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // A gombhoz tartozó data-content érték lekérése
        const content = button.getAttribute('data-content');
        
        if (button.textContent === "Gomb 1") {
            // Tartalom beillesztése
            popupBody.innerHTML = `
            
                <h2>${button.textContent}</h2>
                <p>${content}</p>
                <img src="https://via.placeholder.com/150" alt="Példa kép">
            `;
        }
        if (button.textContent === "Gomb 2") {
            // Tartalom beillesztése
            popupBody.innerHTML = `
            
                <h2>Semmi</h2>
                <p>${content}</p>
                <img src="https://via.placeholder.com/150" alt="Példa kép">
            `;
        }

        

        // Popup megjelenítése
        popupOverlay.classList.remove('hidden');
        popupOverlay.style.display = 'flex';  // Flexbox megjelenítés
    });
});

// Eseménykezelés a bezárás gombhoz
closeButton.addEventListener('click', () => {
    popupOverlay.classList.add('hidden');
    popupOverlay.style.display = 'none';  // Popup bezárása
});

// Eseménykezelés a popup overlay-hez, hogy kattintásra bezáródjon
popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.classList.add('hidden');
        popupOverlay.style.display = 'none';  // Popup bezárása
    }
});