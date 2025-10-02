---
layout: default
title: Map of Avernus
---
# An Interactive Map of Avernus

Click on the markers to learn more about key locations in our campaign.

<div id="map-container" style="position: relative;">
  <img src="{{ '/assets/images/avernus-map.webp' | relative_url }}" alt="Map of Avernus" id="map-image">
  <!-- Markers will be added here by JavaScript -->
</div>

<div id="map-tooltip" class="map-tooltip" style="display: none;">
  <h3 id="tooltip-title"></h3>
  <p id="tooltip-description"></p>
</div>

<script>
  const locationsData = {{ site.data.locations | jsonify }};
</script>
<script src="{{ '/assets/js/map.js' | relative_url }}"></script>
