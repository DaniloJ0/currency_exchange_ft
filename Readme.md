# Currency Exchange

## Running
To run this project is crucial create one file *.js* called *key.js* and declare a object within:

```const key= {"API_KEY" : "YOUR_KEY_API", "LINK_API": "https://api.apilayer.com/fixer/" } ```  **!you need to paste your API Key from *https://fixer.io/*!**

Don't forget export that module

``` export default key; ```

## Commands 

Install all Package used in this project
```npm install```

To Build Changes In Code, run this: 
```npx tailwindcss -i ./src/css/estilos.css -o public/style.css --watch```
### or
 ```npx tailwindcss build src/css/estilos.css -o public/style.css```

