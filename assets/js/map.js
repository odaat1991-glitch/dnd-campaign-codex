document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map-container');
    const mapImage = document.getElementById('map-image');
    const tooltip = document.getElementById('map-tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipDescription = document.getElementById('tooltip-description');
    const visibilitySettings = JSON.parse(localStorage.getItem('campaignVisibility')) || { locations: {}, lore: {} };

    const placeMarkers = () => {
        // Assumes locationsData is available globally from an inline script on the page
        if (typeof locationsData !== 'undefined' && mapContainer) {
            const visibleLocations = locationsData.filter(loc => {
                const locationId = loc.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
                return visibilitySettings.locations && visibilitySettings.locations[locationId];
            });

            visibleLocations.forEach(loc => {
                const marker = document.createElement('div');
                marker.classList.add('map-marker');
                marker.style.left = `${loc.x}%`;
                marker.style.top = `${loc.y}%`;
                marker.title = loc.name;
                mapContainer.appendChild(marker);

                marker.addEventListener('mouseenter', () => {
                    tooltipTitle.textContent = loc.name;
                    tooltipDescription.textContent = loc.description;
                    tooltip.style.display = 'block';
                });

                marker.addEventListener('mousemove', (e) => {
                    // Position tooltip near the cursor
                    tooltip.style.left = `${e.pageX + 15}px`;
                    tooltip.style.top = `${e.pageY + 15}px`;
                });

                marker.addEventListener('mouseleave', () => {
                    tooltip.style.display = 'none';
                });
            });
        }
    };

    if (mapImage.complete) {
        placeMarkers();
    } else {
        mapImage.addEventListener('load', placeMarkers);
    }
});
