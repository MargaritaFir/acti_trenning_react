import React from 'react';


const InputField = (props:any) => {

    const {query, placeholder, onInput} = props;

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
                onClick={() => props.clearQuery()} 
            > &times; </span>
       </div>    
    )
}

export default InputField