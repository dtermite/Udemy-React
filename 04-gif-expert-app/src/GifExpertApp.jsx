import { useState } from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

  const onAddCategory= () =>{

  }

  console.log(categories);

  return (
    <>
      {/*Titulo */}
        <h1>GifExpertApp</h1>
        
      {/*Imput */}


      {/*Listado de Gif */}
        {/* Gif item */}
        <button>Agregar</button>
        <ol>
          {
            categories.map(category=>{
              return <li key={category}>{category}</li>

            })
          }
            
          
          
        </ol>
    </>
  )
}
