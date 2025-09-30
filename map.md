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
