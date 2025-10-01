---
layout: default
title: Lore
---
# Unlocked Lore

As you uncover secrets in Avernus, they will be recorded here.

<div id="lore-container">
  <!-- Lore entries will be dynamically added here by JavaScript -->
</div>

<script>
  const loreData = {{ site.data.lore | jsonify }};
</script>
<script src="{{ '/assets/js/lore.js' | relative_url }}"></script>