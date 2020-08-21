import React, { useEffect, useState } from 'react';


const InputField = (props:any) => {

   return (
       <input id='inputAutocomplite' value={props.query} placeholder={props.placeholder} onChange={ (e) => props.onInput(e)}/>
   )
}

export default InputField