import React from 'react';

interface IProps {
    query: string;  
    placeholder:string;
    onInput:(e:any) => void;
    clearQuery: () => void;
    onVisibleList: () => void;
};


const InputField:React.FC<IProps> = ( { query, placeholder, onInput, clearQuery, onVisibleList } ) => {


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