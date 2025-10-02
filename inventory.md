---
layout: default
title: Inventory
permalink: /inventory/
---

## Party Inventory

<a href="https://docs.google.com/spreadsheets/d/1R2wH5K6E3dSZcRzR0kj5ADdXyBS7338LdIydnfujLa8/edit?usp=sharing" target="_blank" class="edit-button">Edit Inventory</a>

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

<style>
  .edit-button {
    display: inline-block;
    padding: 10px 15px;
    margin-bottom: 15px;
    background-color: #04AA6D; /* A nice green */
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
  }
  .edit-button:hover {
    background-color: #058d5a;
  }
</style>

<script src="{{ '/assets/js/inventory.js' | relative_url }}"></script>
