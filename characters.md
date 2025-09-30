---
layout: page
title: Characters
permalink: /characters/
---

## Party Members

<ul>
  {% for character in site.characters %}
    <li>
      <a href="{{ character.url | relative_url }}">
        {{ character.name }}
      </a>
    </li>
  {% endfor %}
</ul>
