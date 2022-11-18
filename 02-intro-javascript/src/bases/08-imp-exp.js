import  heroes, {owners} from '../data/heroes.js';

/*const getHeroeById=(id)=>{
    return heroes.find(elemento=>elemento.id===id);
}
*/

//console.log(owners);

const getHeroeById=(id) =>heroes.find(e=>e.id===id);

//console.log(getHeroeById(3));

const getHeroeByOwner=(owner) =>heroes.filter(e=>e.owner===owner);

//console.log(getHeroeByOwner('Marvel'));

export default getHeroeById;
