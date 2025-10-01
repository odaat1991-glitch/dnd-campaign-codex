document.addEventListener('DOMContentLoaded', () => {
    const visibilitySettings = JSON.parse(localStorage.getItem('campaignVisibility')) || { locations: {}, lore: {} };

    function initializeCheckboxes(type) {
        const dashboardId = type === 'location' ? 'map-locations-dashboard' : 'lore-entries-dashboard';
        const checkboxes = document.querySelectorAll(`#${dashboardId} input[type="checkbox"]`);
        
        checkboxes.forEach(checkbox => {
            const id = checkbox.dataset.id;
            const category = checkbox.dataset.type === 'location' ? 'locations' : 'lore';
            
            if (visibilitySettings[category] && visibilitySettings[category][id]) {
                checkbox.checked = true;
            }

            checkbox.addEventListener('change', (event) => {
                updateVisibility(category, id, event.target.checked);
            });
        });
    }

    function updateVisibility(category, id, isVisible) {
        if (!visibilitySettings[category]) {
            visibilitySettings[category] = {};
        }
        visibilitySettings[category][id] = isVisible;
        localStorage.setItem('campaignVisibility', JSON.stringify(visibilitySettings));
    }

    initializeCheckboxes('location');
    initializeCheckboxes('lore');
});
