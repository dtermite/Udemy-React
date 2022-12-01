const getImagen=async()=>{

    try {
        const urlApi='https://api.giphy.com/v1/gifs/random?api_key=';
        const apiKey='Y77mOhchjjjlqnBFDZK4nXOXR1DEUdXr';
        const ruta=`${urlApi}${apiKey}`;
        const resp = await fetch(ruta);
        const {data}=await resp.json();
        
        console.log(data);
        const {url}=data.images.original;
            
        const img=document.createElement('img');
        img.src=url;
        document.body.append(img); 
    } catch (error) {
        console.error(error);
        
    }
    
}

getImagen();