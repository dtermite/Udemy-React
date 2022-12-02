//Estos son los 2 elementos basicos para renderizar la App
import React from 'react';
import ReactDOM from 'react-dom/client';
//

function App(){
    return (<h1>Hola Mundo</h1>);
}

//renderizo el elemente con id 'root' del index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    // React siempre se ejecuta en StrictMode
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
