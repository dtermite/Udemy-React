const personajes=['Goku', 'Vegeta', 'Tunks'];

const [,, p1]=personajes;

console.log(p1)

const useState=(valor)=>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const[nombre, setNombre]=useState('Goku');
console.log(nombre);
setNombre();
