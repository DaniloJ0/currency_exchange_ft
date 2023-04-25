// const apiKey = process.env.API_KEY;

const fetchConversionRate = async (apiKey) => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", apiKey);
  
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
  
    const response = await fetch("https://api.apilayer.com/fixer/convert?to=GBP&from=Eur&amount=5", requestOptions);
    const result = await response.text();
  
    return result;
};

export default { fetchConversionRate };



// fetch("https://api.apilayer.com/fixer/convert?to=Dolar&from=Eur&amount=5", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



//Symbols 
// var myHeaders = new Headers();
// myHeaders.append("apikey", "f31FtCoLtkYQtWxKWbqJVrWE3wtQZ6a2");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



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
