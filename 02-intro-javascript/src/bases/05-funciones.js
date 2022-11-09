const saludar=function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2=(nombre)=>{
    return `Hola, ${nombre}`;
}

console.log(saludar('Vegeta'));
console.log(saludar2('Vegeta'));

const getUser=()=>({
    uid:'ABC123',
    username:'El_Papi1502'
});

console.log(getUser());

const getUsuarioActivo=(nombre)=>{
    return{
        uid:'ABC567',
        username:nombre
    }
};

const usuarioActivo=getUsuarioActivo('Diego');
console.log(usuarioActivo);
