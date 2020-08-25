import React from 'react';
import {IInputProps} from '../common/commonInterfaces';



const InputField:React.FC<IInputProps> = ( props:IInputProps ) => {

    const { query, placeholder, onInput, clearQuery, onVisibleList } = props;

    return (
        <div className='input_container'>
            <input id='inputAutocomplite' 
                value={query} 
                placeholder={placeholder} 
                onChange={ (e) => onInput(e)}   
                autoComplete="off"  
                onFocus={() => onVisibleList()}
            />
            <span 
                className="clear_input" 
                onClick={() => clearQuery()} 
            > &times; </span>
        </div>    
    )
}

export default InputField