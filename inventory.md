---
layout: default
title: Inventory
permalink: /inventory/
---

## Party Inventory

<a class="edit-button" href="https://docs.google.com/spreadsheets/d/1R2wH5K6E3dSZcRzR0kj5ADdXyBS7338LdIydnfujLa8/edit?usp=sharing" target="_blank">Edit Inventory</a>

<table class="inventory-table">
  <thead>
    <tr>
      <th>Character</th>
      <th>Item Name</th>
      <th>Category</th>
      <th>Rarity</th>
      <th>Attunement Required</th>
      <th>Quantity</th>
      <th>Location Found</th>
      <th>Last Updated Date</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody id="inventory-body">
    <!-- Inventory items will be loaded here by JavaScript -->
    <tr>
      <td colspan="9">Loading inventory...</td>
    </tr>
  </tbody>
</table>

<script src="{{ '/assets/js/inventory.js' | relative_url }}"></script>
