
import connection from "./connection_api.js";
import simbolos from "./symbols.js";

const form = document.getElementById("form_convert");
let result = document.getElementById("result");
let switch_value = document.getElementById("switch_amount");
let list_from = document.getElementById("select_from");
let list_to = document.getElementById("select_to");
 
let symb = Object.keys(simbolos);

symb.forEach((badge) => { 
  const optionElementFrom = document.createElement('option');
  const optionElementTo = document.createElement('option');

  optionElementFrom.textContent = badge;
  optionElementTo.textContent = badge;

  list_from.appendChild(optionElementFrom);
  list_to.appendChild(optionElementTo);
});



form.addEventListener('submit', (e) => {
  e.preventDefault();

  let amount_input = document.getElementById("amount").value;
  let from = document.getElementById("select_from").value;
  let to = document.getElementById("select_to").value;
  let amount = amount_input.trim();
  if (amount.length === 0 || isNaN(Number(amount))) return alert('Por favor, ingresa una cantidad válida');

  connection.fetchConversionRate(from, to, amount)
  .then(convert => {
    result.textContent = `${amount} ${from} ≅ ${convert.result} ${to}`
    let previousResult = JSON.parse(localStorage.getItem('results')) || [];
    previousResult.push({amount, from, to, valor:convert.result, date: new Date().toISOString().slice(0, 10)});
    localStorage.setItem('results', JSON.stringify(previousResult));
  }).catch(error => console.log('error', error));
});

switch_value.addEventListener('click', (e) => {
  e.preventDefault();
  let from = document.getElementById("select_from").value;
  let to = document.getElementById("select_to").value;

  document.getElementById("select_from").value = to;
  document.getElementById("select_to").value = from;
});



//Response from API call

// {
//   "success": true,
//   "query": {
//       "from": "EUR",
//       "to": "GBP",
//       "amount": 5
//   },
//   "info": {
//       "timestamp": 1682445063,
//       "rate": 0.884152
//   },
//   "date": "2023-04-25",
//   "result": 4.42076
// }