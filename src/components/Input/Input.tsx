import React, {useCallback, memo} from 'react';
import './input.scss';

interface IProps {
    query: string;  
    placeholder:string;
    onChange:(e:any) => void;
    clearQuery: () => void;
    onVisibleList: () => void;
};

const Input:React.FC<IProps> = ( { query, placeholder, onChange, clearQuery, onVisibleList } ) => {

    const handleChange = useCallback((e) => {
        onChange(e)
    }, [onChange])

    return (
        <div className='input_container'>
            <input  
                value={query} 
                placeholder={placeholder} 
                onChange={handleChange}   
                autoComplete="off"  
                onFocus={onVisibleList}
            />
            <span 
                className="clear_input" 
                onClick={clearQuery} 
            > &times; </span>
        </div>    
    )
}

export default memo(Input);