document.addEventListener('DOMContentLoaded', () => {
    const inventoryBody = document.getElementById('inventory-body');
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLZcRd0tdl6X3PuHyjHR_zL4VX_L2mr_ZB48FI6DP0HNg8TrWylAZwrJe1e44ZutXhKyLtlYnDpLET/pub?gid=0&single=true&output=csv';
    if (inventoryBody) {
        fetch(url)
            .then(response => response.text())
            .then(csvText => {
                // Clear any existing placeholder content
                inventoryBody.innerHTML = '';
                
                const rows = csvText.trim().split('\n');
                let validRowCount = 0;
                
                // Skip header row by starting at i = 1
                for (let i = 1; i < rows.length; i++) {
                    const row = rows[i].trim();
                    // Skip empty rows
                    if (!row) continue;
                    
                    const columns = row.split(',').map(col => col.trim().replace(/^"|"$/g, ''));
                    
                    // Get the Character field (assuming it's the first column, index 0)
                    const characterField = columns[0] ? columns[0].trim() : '';
                    
                    // Filter: only render if Character field is present and NOT 'FALSE' or empty
                    if (!characterField || characterField.toUpperCase() === 'FALSE') {
                        continue;
                    }
                    
                    // Limit to first 9 columns only
                    const limitedColumns = columns.slice(0, 9);
                    
                    // Ensure we have valid data
                    if (limitedColumns.length > 0) {
                        const tr = document.createElement('tr');
                        limitedColumns.forEach((columnText, index) => {
                            const td = document.createElement('td');
                            // Hide the text if it's the Attunement column and the value is FALSE
                            if (index === 4 && columnText.toUpperCase() === 'FALSE') {
                                td.textContent = '';
                            } else {
                                td.textContent = columnText;
                            }
                            tr.appendChild(td);
                        });
                        inventoryBody.appendChild(tr);
                        validRowCount++;
                    }
                }
                
                // If no valid rows were found, show a message
                if (validRowCount === 0) {
                    inventoryBody.innerHTML = '<tr><td colspan="9">No inventory items found.</td></tr>';
                }
            })
            .catch(error => {
                console.error('Error fetching inventory data:', error);
                inventoryBody.innerHTML = '<tr><td colspan="9">Error loading inventory. Please try again later.</td></tr>';
            });
    }
});
