---
layout: page
title: Map
permalink: /map/
---

## Campaign Map

<div style="position: relative;">
  <img src="{{ '/assets/images/avernus-map.jpg' | relative_url }}" alt="Campaign Map">
  {% for location in site.data.locations %}
    <a href="#" title="{{ location.name }}: {{ location.description }}" style="position: absolute; top: {{ location.y }}px; left: {{ location.x }}px; width: 10px; height: 10px; background-color: red; border-radius: 50%;"></a>
  {% endfor %}
</div>
document.addEventListener('DOMContentLoaded', function () {
    const mapContainer = document.getElementById('map-container');
    const tooltip = document.getElementById('map-tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipDescription = document.getElementById('tooltip-description');

    // Fetch location data from Jekyll's site data (passed via fetch)
    // In a real Jekyll build, this data would be available globally.
    // For this standalone file, we'll fetch it from the YML.
    fetch('/_data/locations.yml')
      .then(response => {
        if (!response.ok) {
            // A simple fallback for local preview without a server that understands Jekyll structure.
            // This assumes the data is accessible, which might not be the case.
            // In the actual Jekyll site, this fetch is not needed as data is compiled in.
            // Let's manually define it here for robustness in different environments.
            throw new Error('Could not fetch locations, using fallback.');
        }
        return response.text();
      })
      .then(text => {
        // Basic YAML parsing (won't handle all cases, but good for this structure)
        const locations = text.split('- name:').slice(1).map(entry => {
            const lines = entry.trim().split('\n');
            const name = lines[0].trim();
            const x = parseInt(lines[1].split(':')[1].trim(), 10);
            const y = parseInt(lines[2].split(':')[1].trim(), 10);
            const description = lines[3].split(':')[1].trim().replace(/"/g, '');
            return { name, x, y, description };
        });
        createMarkers(locations);
      }).catch(error => {
        console.warn(error.message);
        // Fallback data in case the fetch fails
        const fallbackLocations = [
            { name: "Elturel", x: 45, y: 30, description: "The fallen city, hanging in the sky of Avernus by massive infernal chains." },
            { name: "Fort Knucklebone", x: 35, y: 55, description: "A chaotic scrapyard-fortress run by Mad Maggie and her gang of redcaps." },
            { name: "The River Styx", x: 60, y: 65, description: "This foul river flows through Avernus, its waters capable of stealing memories." },
            { name: "The Wandering Emporium", x: 75, y: 45, description: "A mobile market built on the backs of giant infernal creatures." }
        ];
        createMarkers(fallbackLocations);
      });


    function createMarkers(locations) {
        locations.forEach(location => {
            const marker = document.createElement('div');
            marker.className = 'map-marker';
            marker.style.left = `${location.x}%`;
            marker.style.top = `${location.y}%`;
            marker.dataset.title = location.name;
            marker.dataset.description = location.description;
            mapContainer.appendChild(marker);

            marker.addEventListener('mouseenter', (event) => {
                tooltipTitle.textContent = event.target.dataset.title;
                tooltipDescription.textContent = event.target.dataset.description;
                tooltip.style.display = 'block';

                // Position tooltip near marker
                const rect = event.target.getBoundingClientRect();
                const containerRect = mapContainer.getBoundingClientRect();
                tooltip.style.left = `${rect.left - containerRect.left + 25}px`;
                tooltip.style.top = `${rect.top - containerRect.top - tooltip.offsetHeight / 2 + 7}px`;
            });

            marker.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });
        });
    }
});
