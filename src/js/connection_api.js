import data from "../../key.js"
const apiKey = data.API_KEY;

const fetchConversionRate = async (from, to, amount) => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", apiKey);
  
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    //opcion 2
    //https://api.apilayer.com/exchangerates_data/convert?to=
    const response = await fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions);
    const result = await response.json();
  
    return result;
};

export default { fetchConversionRate };


// //Timeseries
// var myHeaders = new Headers();
// myHeaders.append("apikey", "f31FtCoLtkYQtWxKWbqJVrWE3wtQZ6a2");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/fixer/timeseries?start_date=2018-02-25&end_date=2018-02-22", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



// //Date{YYYY-MM-DD}

// var myHeaders = new Headers();
// myHeaders.append("apikey", "f31FtCoLtkYQtWxKWbqJVrWE3wtQZ6a2");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/fixer/2018-02-16?symbols=symbols&base=EUR", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
