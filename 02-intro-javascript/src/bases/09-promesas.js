import getHeroeById from './bases/08-imp-exp.js';

// const promesa=new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         const heroe=getHeroeById(30);
//         resolve(heroe)
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log(heroe)
// })
// .catch(err=>console.warn(err));

const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve,reject)=>{

             setTimeout(() => {
                 const heroe=getHeroeById(id);
                 if (heroe){
                    resolve(heroe);
                 }else{
                    reject(`No se encontro heroe ${id}`)
                 }
                 
            }, 2000);
        });
}
getHeroeByIdAsync(40)
    .then(heroe=>console.log('Heroe', heroe))
    .catch(err=>console.warn(err));