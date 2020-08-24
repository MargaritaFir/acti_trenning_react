import React from 'react';


const InputField = (props:any) => {

    const {query, placeholder, onInput} = props;
   return (
       <input id='inputAutocomplite' value={query} placeholder={placeholder} onChange={ (e) => onInput(e)} />
   )
}

export default InputField