//import fetch from "node-fetch";

const urlApi='https://api.giphy.com/v1/gifs/random?api_key=';

const apiKey='Y77mOhchjjjlqnBFDZK4nXOXR1DEUdXr';

const ruta=`${urlApi}${apiKey}`;

//console.log(ruta);
const peticion = fetch(ruta);
//const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp=> resp.json())
    .then(({data})=>{
        const {url}=data.images.original;
        
        const img=document.createElement('img');
        img.src=url;
        document.body.append(img);
        
    })

    
    .catch(console.warn);
