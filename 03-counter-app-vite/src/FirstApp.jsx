const getResult=(a, b)=>{
  return a+b;
}

export const FirstApp = () => {
  
  return (
    //Fragmentos
    <>
      <h1>{getResult(5,3)}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Soy un subtitulo</p>
    </>
    
  )
}
