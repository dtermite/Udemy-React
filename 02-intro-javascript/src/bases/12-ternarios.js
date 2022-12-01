const activo=true;
//let mensaje='';

//if(activo){
//    mensaje='Activo';
//}else{
//    mensaje='Inactivo';
//}

//Es lo mismo que el if de arriba pero con operadores ternarios
//const mensaje=(activo)? 'Activo' : 'Inactivo';

//Sin condicion else
const mensaje=activo && 'Activo';

console.log(mensaje);