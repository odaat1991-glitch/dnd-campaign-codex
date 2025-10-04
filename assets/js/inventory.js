document.addEventListener('DOMContentLoaded', () => {
    const inventoryBody = document.getElementById('inventory-body');
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLZcRd0tdl6X3PuHyjHR_zL4VX_L2mr_ZB48FI6DP0HNg8TrWylAZwrJe1e44ZutXhKyLtlYnDpLET/pub?gid=0&single=true&output=csv';
    if (inventoryBody) {
        fetch(url)
            .then(response => response.text())
            .then(csvText => {
                // Clear any existing placeholder content
                inventoryBody.innerHTML = '';
                
                // This is a simple parser; it won't handle commas inside quoted fields well.
                const rows = csvText.trim().split('\n');
                // Skip header row by starting at i = 1
                for (let i = 1; i < rows.length; i++) {
                    const row = rows[i];
                    const columns = row.split('\t').map(col => col.trim().replace(/^"|"$/g, ''));
                    if (columns.length > 1) { // Ensure it's not an empty row
                        const tr = document.createElement('tr');
                        columns.forEach((columnText, index) => {
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
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching inventory data:', error);
                inventoryBody.innerHTML = '<td colspan="3">Error loading inventory. Please try again later.</td>';
            });
    }
});
