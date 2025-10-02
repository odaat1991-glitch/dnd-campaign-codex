---
layout: default
title: Inventory
permalink: /inventory/
---

## Party Inventory

<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.items %}
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.description }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
