import PropTypes from 'prop-types';

const getResult=(a, b)=>{
  return a+b;
}

export const FirstApp = ({title, subTitle}) => {

  
  return (
    //Fragmentos
    <>
      <h1>{getResult(5,3)}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Soy un titulo</p>
      <h2>{title}</h2>
      <h2>{subTitle}</h2>
    </>
    
  )
}

FirstApp.PropTypes ={
  /* Con la palabra es isRequired es obligatorio, 
  si no la omito, en la consola se ve el error pero no en el navegador*/
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.number.isRequired,
}

FirstApp.defaultProps={
  //Las default props entran antes que los tipos
  title:"No hay titulo",
  subTitle:"No hay subtitulo"
}