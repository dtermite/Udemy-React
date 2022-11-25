import fetch from "node-fetch";

const url='https://api.giphy.com/v1/gifs/random?api_key=';

const apiKey='Y77mOhchjjjlqnBFDZK4nXOXR1DEUdXr';

const ruta=`${url}${apiKey}`;

//console.log(ruta);
const peticion = fetch(ruta);
//const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then(resp=>{
    console.log(resp)
})
.catch(console.warn);
