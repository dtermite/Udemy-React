const nombre='Diego';
const apellido='Termite';

const nombreCompleto= `Hola ${nombre} 
${apellido}
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo('Pepe')}`);