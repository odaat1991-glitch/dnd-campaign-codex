// Enhanced Inventory System with Medieval Theme
// Loads inventory data from JSON and applies modern styling

document.addEventListener('DOMContentLoaded', () => {
  const inventoryBody = document.getElementById('inventory-body');
  const url = './assets/json/inventory-data.json';
  
  if (!inventoryBody) return;
  
  // Add medieval-themed styles dynamically
  addInventoryStyles();
  
  // Show loading state with medieval styling
  inventoryBody.innerHTML = '<tr><td colspan="9" class="inventory-loading"><span class="loading-icon">⚔</span> Loading inventory...</td></tr>';
  
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      inventoryBody.innerHTML = '';
      
      if (!Array.isArray(data) || data.length === 0) {
        inventoryBody.innerHTML = '<tr><td colspan="9" class="inventory-empty">📜 No inventory items found. Start your adventure!</td></tr>';
        return;
      }
      
      // Render inventory items with enhanced styling
      data.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.className = 'inventory-row';
        tr.setAttribute('data-rarity', (item.Rarity || 'common').toLowerCase());
        
        // Add alternating row styling
        if (index % 2 === 0) {
          tr.classList.add('even-row');
        }
        
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
        
        cols.forEach((text, colIndex) => {
          const td = document.createElement('td');
          td.textContent = text;
          
          // Add special styling for rarity column
          if (colIndex === 3 && text) {
            td.className = `rarity-${text.toLowerCase()}`;
          }
          
          tr.appendChild(td);
        });
        
        inventoryBody.appendChild(tr);
      });
    })
    .catch(error => {
      console.error('Error loading inventory JSON:', error);
      inventoryBody.innerHTML = '<tr><td colspan="9" class="inventory-error">⚠️ Error loading inventory. The tome appears to be locked!</td></tr>';
    });
});

// Function to add medieval-themed styles to inventory
function addInventoryStyles() {
  // Check if styles already exist
  if (document.getElementById('inventory-custom-styles')) return;
  
  const styleSheet = document.createElement('style');
  styleSheet.id = 'inventory-custom-styles';
  styleSheet.textContent = `
    /* Medieval-Themed Inventory Styles */
    
    #inventory-body {
      font-family: 'Georgia', 'Times New Roman', serif;
    }
    
    /* Row styling */
    .inventory-row {
      transition: all 0.3s ease;
      border-bottom: 1px solid rgba(139, 26, 26, 0.2);
    }
    
    .inventory-row:hover {
      background-color: rgba(212, 175, 55, 0.1);
      transform: scale(1.01);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .inventory-row.even-row {
      background-color: rgba(244, 232, 208, 0.3);
    }
    
    /* Loading, empty, and error states */
    .inventory-loading,
    .inventory-empty,
    .inventory-error {
      text-align: center;
      padding: 2rem !important;
      font-style: italic;
      font-size: 1.1em;
    }
    
    .inventory-loading {
      color: #6b4423;
      background: linear-gradient(135deg, #f4e8d0 0%, #e8dcc0 100%);
    }
    
    .loading-icon {
      display: inline-block;
      animation: rotate 2s linear infinite;
      font-size: 1.3em;
      margin-right: 0.5rem;
    }
    
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .inventory-empty {
      color: #8b1a1a;
      background-color: rgba(244, 232, 208, 0.5);
      border: 2px dashed #d4af37;
    }
    
    .inventory-error {
      color: #d32f2f;
      background-color: rgba(211, 47, 47, 0.1);
      border: 2px solid #8b1a1a;
    }
    
    /* Rarity-based coloring */
    .rarity-common {
      color: #2c1810;
      font-weight: normal;
    }
    
    .rarity-uncommon {
      color: #1e7e34;
      font-weight: 600;
    }
    
    .rarity-rare {
      color: #0056b3;
      font-weight: 600;
    }
    
    .rarity-very-rare,
    .rarity-"very rare" {
      color: #6f42c1;
      font-weight: 700;
    }
    
    .rarity-legendary {
      color: #d4af37;
      font-weight: 700;
      text-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
    }
    
    .rarity-artifact {
      color: #8b1a1a;
      font-weight: 700;
      text-shadow: 0 0 8px rgba(139, 26, 26, 0.6);
    }
    
    /* Table cell styling */
    #inventory-body td {
      padding: 0.75rem;
      vertical-align: middle;
      border-right: 1px solid rgba(139, 26, 26, 0.1);
    }
    
    #inventory-body td:last-child {
      border-right: none;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      #inventory-body td {
        padding: 0.5rem;
        font-size: 0.9em;
      }
      
      .inventory-loading,
      .inventory-empty,
      .inventory-error {
        padding: 1rem !important;
        font-size: 1em;
      }
    }
    
    /* Table wrapper enhancements */
    .inventory-table-wrapper {
      border: 2px solid #8b1a1a;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 
                  inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    
    /* Table header styling */
    table thead th {
      background: linear-gradient(135deg, #8b1a1a 0%, #6b1414 100%);
      color: #f4e8d0;
      padding: 1rem 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 3px solid #d4af37;
      position: sticky;
      top: 0;
      z-index: 10;
    }
    
    table thead th:hover {
      background: linear-gradient(135deg, #6b1414 0%, #8b1a1a 100%);
    }
  `;
  
  document.head.appendChild(styleSheet);
}
