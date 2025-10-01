document.addEventListener('DOMContentLoaded', () => {
    const loreContainer = document.getElementById('lore-container');
    const visibilitySettings = JSON.parse(localStorage.getItem('campaignVisibility')) || { locations: {}, lore: {} };

    // Assumes loreData is available globally from an inline script on the page
    if (typeof loreData !== 'undefined' && loreContainer) {
        const visibleLore = loreData.filter(item => visibilitySettings.lore && visibilitySettings.lore[item.id]);

        if (visibleLore.length > 0) {
            loreContainer.innerHTML = ''; // Clear placeholder
            visibleLore.forEach(item => {
                const loreElement = document.createElement('article');
                loreElement.classList.add('lore-entry');
                loreElement.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.content.replace(/\n/g, '<br>')}</p>
                `;
                loreContainer.appendChild(loreElement);
            });
        } else {
            loreContainer.innerHTML = '<p>No lore has been discovered yet.</p>';
        }
    }
});
