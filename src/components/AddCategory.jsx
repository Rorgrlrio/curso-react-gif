import { useState } from 'react'

export const AddCategory = ( { onNewCategorie } ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }//onInputChange

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length < 1) return;

        //setCategories( (categories) => [ inputValue, ...categories ] ); //Las funciones setVariable pueden llamar a "variable" de esta forma
    
        onNewCategorie(inputValue.trim()); //O le podemos pasar una funcion del padre que se encargue de ese proceso, es igual

        setInputValue("");
    }//onSubmit

  return (

    <form onSubmit={ onSubmit }>

        <input 
            type="text" 
            placeholder="Buscar Gifs..." 
            value={inputValue}
            onChange={ onInputChange } />

    </form>  

  )
}
