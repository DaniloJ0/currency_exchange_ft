import data from "../../key.js"
const apiKey = data.API_KEY; 
import connection from "./connection_api.js";

// connection.fetchConversionRate(apiKey)
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


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