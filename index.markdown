---
layout: default
title: Home
---
# Welcome to Our Campaign

This site tracks the adventures of our party in the Descent into Avernus campaign. Here you'll find information about the characters, their shared inventory, an interactive map, and logs of our sessions.

## Latest Session Logs
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h3>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>

<p>Use the navigation at the top to explore the different sections of the site.</p>