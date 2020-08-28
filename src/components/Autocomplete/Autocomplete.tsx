import React, { useEffect, useState, useMemo, useRef } from 'react';
import {filter} from '../../common/utils/filter';
import Input from '../Input/Input';
import List from './List/List';
import { IItem } from '../../common/interfaces';
import './autocomplete.scss';


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
    // const inputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {

        const onHiddenList = (e:any) => {
            const list = document.getElementById('autoList');
            const id = e.target.id;
            const isItemClass:boolean = e.target.classList.contains('item');
            const isClose:boolean = (id === 'autoList' || id === 'inputAutocomplite' || isItemClass) ? false : true;

            if(list && isClose){
                setShowList(false);
            } 
        }

        document.addEventListener('click', onHiddenList)

        return () => document.removeEventListener('click', onHiddenList );

    }, []);


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
        <div className='form_autocomplite' id="autocomplite" >
            <Input 
                onChange={handleChange} 
                value={value}
                onClear={onClearValue}
                onFocus={onShowList}
                placeholder={placeholder}
                // inputRef={inputRef}
            />
            {  isShowList && <List items={listItems}  onSelect={onSelectItem} notFound={notFound}/>  }

        </div>
    )
}

export default Autocomplete;