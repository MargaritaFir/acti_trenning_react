import React from 'react';
import {IInputProps} from '../common/commonInterfaces';



const InputField = ( props:IInputProps ) => {

    const { query, placeholder, onInput, clearQuery } = props;

    return (
       <div className='input_container'>
            <input id='inputAutocomplite' 
                value={query} 
                placeholder={placeholder} 
                onChange={ (e) => onInput(e)}   
                autoComplete="off"  
                // onBlur={() => props.onVisibleList()}
            />
            <span 
                className="clear_input" 
                onClick={() => clearQuery()} 
            > &times; </span>
       </div>    
    )
}

export default InputField