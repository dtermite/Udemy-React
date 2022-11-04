const persona={
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip:55321,
        lat:14.32,
        lng:34.92,
    }
};

//console.table(persona);

const persona2={...persona};
persona2.nombre='Peter';
console.log(persona);
console.log(persona2)


