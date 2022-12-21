import { useState } from 'react';
import { AddCategory }from './components/AddCategory'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

  const onAddCategory= () =>{
    // el push se utiliza para Javasript con arreglos en react no
    //categories.push('Otro elemento');
    setCategories(['Valorant',...categories]);

  }

  console.log(categories);

  return (
    <>
      {/*Titulo */}
        <h1>GifExpertApp</h1>
        
      {/*Imput */}
      < AddCategory setCategories={ setCategories}/>


      {/*Listado de Gif */}
        {/* Gif item */}
        
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
