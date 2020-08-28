import React, { useEffect, useState, useMemo, useRef } from 'react';
import {filter} from '../../common/utils/filter';
import Input from '../Input/Input';
import List from './List/List';
import { IItem } from '../../common/interfaces';
import './autocomplete.scss';
import {useOnClickOutside} from '../../hooks/useOnClickOutside';


interface IProps  {
    items:IItem[];  
    placeholder: string;
    notFound:string;
    selectItem:IItem | null;
    onSelect: (id:number) => void;
    onClear:() => void;
};

const Autocomplete:React.FC<IProps> = ( { items, onSelect, selectItem, placeholder, notFound, onClear } ) => {

    const [ value, setValue ] = useState<string>('');
    const [ isShowList, setShowList ] = useState<boolean>(false);
    const listItems = useMemo(() => filter(items, value), [items, value]);
    const autocompleteRef = useRef<HTMLDivElement>(null);



    useOnClickOutside( autocompleteRef, () => setShowList(false))


    useEffect(() => {
        if(selectItem) setValue(selectItem.name);
    }, [selectItem])


    useEffect(() => {
        if(!value) setShowList(false);  
    }, [value])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
        setShowList(true);
    };


    const onClearValue = () => {
        setValue('');
        onClear()
    };


    const onShowList = () => {
        if(value) setShowList(true);
    };

    const onSelectItem = (id:number) => {
        if(selectItem && selectItem.id === id){
            setValue(selectItem.name)
        } else {
            onSelect(id);
        }     
        setShowList(false);
    }

    return (
        <div className='form_autocomplite' ref={autocompleteRef} >
            <Input 
                onChange={handleChange} 
                value={value}
                onClear={onClearValue}
                onFocus={onShowList}
                placeholder={placeholder}
            />
            {  isShowList && <List items={listItems}  onSelect={onSelectItem} notFound={notFound}/>  }

        </div>
    )
}

export default Autocomplete;