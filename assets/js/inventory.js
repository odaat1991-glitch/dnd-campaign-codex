document.addEventListener('DOMContentLoaded', () => {
  const inventoryBody = document.getElementById('inventory-body');
  const url = '/assets/json/inventory-data.json';

  if (!inventoryBody) return;

  inventoryBody.innerHTML = '<tr><td colspan="9" style="text-align:center; font-style:italic;">Loading inventory...</td></tr>';

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      inventoryBody.innerHTML = '';
      if (!Array.isArray(data) || data.length === 0) {
        inventoryBody.innerHTML = '<tr><td colspan="9" style="text-align:center; color:#8b1a1a;">No inventory items found.</td></tr>';
        return;
      }
      data.forEach(item => {
        const tr = document.createElement('tr');
        const cols = [
          item.Character || '',
          item['Item Name'] || '',
          item.Category || '',
          item.Rarity || '',
          item['Attunement Required'] === 'FALSE' ? '' : item['Attunement Required'],
          item.Quantity || '',
          item['Location Found'] || '',
          item['Last Updated Date'] || '',
          item.Description || ''
        ];
        cols.forEach(text => {
          const td = document.createElement('td');
          td.textContent = text;
          tr.appendChild(td);
        });
        inventoryBody.appendChild(tr);
      });
    })
    .catch(error => {
      console.error('Error loading inventory JSON:', error);
      inventoryBody.innerHTML = '<tr><td colspan="9" style="text-align:center; color:#d32f2f;">Error loading inventory. Please try again later.</td></tr>';
    });
});
