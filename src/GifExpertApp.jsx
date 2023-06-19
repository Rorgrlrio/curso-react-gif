import React from 'react'
import { useState } from 'react'
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState( [ 'Game of Thrones'] );

    const onNewCategorie = ( newCategorie ) => {
        const normalizedCategories = [];
        const normalizedNewCategorie = newCategorie.replace(/\s+/g, '').toLowerCase();
        //console.log(normalizedNewCategorie); //Aqui normalizamos para que el si el usuario busca lo mismo con minusculas/espacios 

        categories.map( categorie => {
            normalizedCategories.push( categorie.replace(/\s+/g, '').toLowerCase() );
            //console.log(categorie.trim().toLowerCase());
        });

        if( normalizedCategories.includes( normalizedNewCategorie ) ) return; //No lo meta

        setCategories( [ newCategorie, ...categories ] );
    
    };

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory onNewCategorie = { onNewCategorie } /> {/*Aqui le pasamos una funcion como parametro para que se comuniquen*/}

        {
            categories.map( categorie => (
                <GifGrid key = { categorie } categorie = { categorie } /> //Aqui le pasamos el valor como key y como parametro, ya que de a fuerzas ocupa key si es creado por map, y dentro del componente no podemos leer el valor de la key
            ))
        }

    </>
  )//return
}//GifExpertApp
