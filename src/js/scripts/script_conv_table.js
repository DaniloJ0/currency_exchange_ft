import connection from "../api/connection_api.js";
import simbolos from "../api/symbols.js";
const typeBadge = document.getElementById('typeBadge');
const addBtn = document.getElementById('addBtn');
const badge = ["CAD", "USD", "EUR", "GBP", "JPY", "AUD"]
const inputAdd = document.getElementById('inputAdd');
const integrarBtn = document.getElementById('integrarBtn');
const allSimbolos = Object.keys(simbolos);

inputAdd.style.display = 'none';

allSimbolos.forEach((badge) => {
    const optionElement = document.createElement('option');
    optionElement.textContent = `${badge} - ${simbolos[badge]}`;
    typeBadge.appendChild(optionElement);
});

//show & hide input add
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputAdd.style.display === 'flex') return inputAdd.style.display = 'none';
    inputAdd.style.display = 'flex';
});

// Add new badge to table (Integrate button)
integrarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const textSymAdd = document.getElementById('symboloAdd').value.toUpperCase();
    if(!allSimbolos.includes(textSymAdd)) return alert('Símbolo no valido');
    if(badge.includes(textSymAdd)) return alert('El símbolo ya está agregado');
    badge.push(textSymAdd);
    deleteTable();
    showCurrenciesTable(typeBadge.value.split("-")[0].trim())
    .then(() => {
        document.getElementById('symboloAdd').value = '';
        inputAdd.style.display = 'none';
    })
    .catch(error => console.log('error', error));
});

//show table after select money
typeBadge.addEventListener('change', (e) => {
    const money = e.target.value;
    const newMoney=money.split("-")[0].trim();
    deleteTable();
    showCurrenciesTable(newMoney);
})

//delete table content
const deleteTable = () => {
    const table = document.querySelector('table');
    table.querySelectorAll('tbody tr').forEach(row => row.remove());
}
//create table content
const showCurrenciesTable = (money) =>{
    let concatSymbs = badge.join("%2C");
    let endPoint = `latest?symbols=${concatSymbs}&base=${money}`
    const loadText = document.getElementById('loadingText');
    loadText.textContent = 'Cargando...';
    connection.fetchConversionRate(endPoint)
    .then(convert => {
        badge.forEach((val) => {
            createRow(simbolos[val], val, convert.rates[val]);
            loadText.style.display = 'none';
         });
    }).catch(error => console.log('error', error));
}

showCurrenciesTable('USD');


function createRow(_name, _symbol, _rate){

    const tbody = document.getElementById('tbodyTable');
    const newRow = document.createElement('tr');
    newRow.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700';
    
    const currencyName = document.createElement('th');
    currencyName.scope = 'row';
    currencyName.className = 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white';
    currencyName.textContent = _name;
    newRow.appendChild(currencyName);
    
    const symbol = document.createElement('td');
    symbol.className = 'px-6 py-4';
    symbol.textContent = _symbol;
    newRow.appendChild(symbol);                     
    
    const rate = document.createElement('td');
    rate.className = 'px-6 py-4';
    rate.textContent = _rate;
    newRow.appendChild(rate);
    tbody.appendChild(newRow);
}



