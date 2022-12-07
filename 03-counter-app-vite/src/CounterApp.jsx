
import PropTypes from 'prop-types';


// Si la funcion no ocupa nada del componente se coloca afuera


export const CounterApp=({value})=>{

    const handleAdd = (event)=> { 
        console.log(event)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>

            <button onClick={ handleAdd }>
                +1
            </button>
        </>

    ) 
}

CounterApp.PropTypes ={
    value:PropTypes.number.isRequired,
  }
  
  CounterApp.defaultProps={
    value:0,
  }