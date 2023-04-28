import data from "../../../key.js"
const apiKey = data.API_KEY;
const apiLink = data.LINK_API;

const fetchConversionRate = async (link) => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", apiKey);
  
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    const response = await fetch(apiLink+link, requestOptions);
    const result = await response.json();
  
    return result;
};

export default { fetchConversionRate };

