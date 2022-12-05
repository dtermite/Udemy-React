const getResult=(a, b)=>{
  return a+b;
}

export const FirstApp = ({title, subTitle}) => {

  if (!title){
    throw new Error('El title no existe');
  }
  
  
  return (
    //Fragmentos
    <>
      <h1>{getResult(5,3)}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Soy un titulo</p>
      <h2>{title}</h2>
    </>
    
  )
}
