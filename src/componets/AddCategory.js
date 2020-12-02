import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategory }) => {
   
    const [inputValue, setInputValue] = useState('')
    const handlerInputChange = (e) => {
        setInputValue(e.target.value) 
    }
   
    const handlerInputSubmit = (e) => {
        e.preventDefault()
       
       
        if( inputValue.trim.length < 2 ){
            setCategory( cats => [inputValue, ...cats])
            setInputValue( '' )
        }
       
    }

    return (
    <form onSubmit= { handlerInputSubmit }>
          <input 
         type='text' 
         value={ inputValue }
         onChange={ handlerInputChange }
         />
    </form>
      
  
    )
}

AddCategory.protTypes = {
    setCategory : PropTypes.func.isRequired,
}