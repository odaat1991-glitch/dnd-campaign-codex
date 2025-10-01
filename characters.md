---
layout: default
title: Characters
---
# The Party

Meet the brave (or foolish) souls who have found themselves trapped in Avernus.

<div class="character-gallery">
  {% for character in site.characters %}
    <div class="character-card">
      <a href="{{ character.url | relative_url }}">
        <img src="{{ character.portrait | relative_url }}" alt="Portrait of {{ character.title }}">
        <h3>{{ character.title }}</h3>
        <p>{{ character.player }}</p>
      </a>
    </div>
  {% endfor %}
</div>