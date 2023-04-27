const tableBody = document.getElementById('table_body');
const data = JSON.parse(localStorage.getItem('results'));

deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    location.reload();
});

data.forEach((row) => {
    const newRow = document.createElement('tr');
    newRow.classList.add('bg-white', 'border-b', 'dark:bg-gray-900', 'dark:border-gray-700');

    const cantidadCell = document.createElement('td');
    cantidadCell.classList.add('px-6', 'py-4', 'whitespace-nowrap', 'dark:text-white');
    cantidadCell.textContent = row.amount;
    newRow.appendChild(cantidadCell);

    const origenCell = document.createElement('td');
    origenCell.classList.add('px-6', 'py-4');
    origenCell.textContent = row.from;
    newRow.appendChild(origenCell);

    const destinoCell = document.createElement('td');
    destinoCell.classList.add('px-6', 'py-4');
    destinoCell.textContent = row.to;
    newRow.appendChild(destinoCell);

    const valorCell = document.createElement('td');
    valorCell.classList.add('px-6', 'py-4');
    valorCell.textContent = row.valor;
    newRow.appendChild(valorCell);

    const dateCell = document.createElement('td');
    dateCell.classList.add('px-6', 'py-4');
    dateCell.textContent = row.date;
    newRow.appendChild(dateCell);

    tableBody.appendChild(newRow);
});