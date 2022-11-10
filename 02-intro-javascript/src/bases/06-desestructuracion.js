// desestructuracion
// Asignacion desestructurante

const persona={
    nombre:'Tony',
    edad:45,
    clave:'Ironman'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const {nombre:nombre2, edad,clave}=persona;
console.log(edad);
console.log(nombre2);

const retornaPersona=({nombre, edad, rango='Capitan'})=>{
    console.log(nombre, edad, rango)
};

retornaPersona(persona);
