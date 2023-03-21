
const form = document.getElementById('myForm');
const table = document.getElementById('resultTable');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  const headerRow = table.insertRow();
  const keyCell = headerRow.insertCell();
  const valueCell = headerRow.insertCell();
  keyCell.innerHTML = '<strong>Key</strong>';
  valueCell.innerHTML = '<strong>Value</strong>';

  for (const [key, value] of formData.entries()) {
    const row = table.insertRow();
    const keyCell = row.insertCell();
    const valueCell = row.insertCell();
    keyCell.textContent = key;
    valueCell.textContent = value;
  }
});