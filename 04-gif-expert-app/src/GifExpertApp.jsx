import { useState } from 'react';
import { AddCategory }from './components/AddCategory'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

  const onAddCategory= (newCategory) =>{
    // el push se utiliza para Javasript con arreglos en react no
    //categories.push('Otro elemento');

    if(categories.includes(newCategory)) return;
    
    setCategories([newCategory,...categories]);

  }

  console.log(categories);

  return (
    <>
      {/*Titulo */}
        <h1>GifExpertApp</h1>
        
      {/*Imput */}

      < AddCategory 
      //setCategories={ setCategories}
        onNewCategory={ (event) => onAddCategory(event)}
      />


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
