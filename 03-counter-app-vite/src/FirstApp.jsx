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
    </>
    
  )
}
