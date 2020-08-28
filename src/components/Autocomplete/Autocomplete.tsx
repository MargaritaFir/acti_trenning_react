import React, { useEffect, useState, useMemo, useRef, memo } from 'react';
import {filterName} from '../../common/utils/filters';
import Input from '../Input/Input';
import List from './List/List';
import { IItem } from '../../common/interfaces';
import {useOnClickOutside} from '../../hooks/useOnClickOutside';
import './autocomplete.scss';

interface IProps  {
    items:IItem[];  
    placeholder: string;
    notFoundElement:string;
    selectItem:IItem | null;
    onSelect: (id:number) => void;
    onClear:() => void;
};

const Autocomplete:React.FC<IProps> = ( { items, onSelect, selectItem, placeholder, notFoundElement, onClear } ) => {

    const [ value, setValue ] = useState<string>('');
    const [ isShowList, setShowList ] = useState<boolean>(false);
    const autocompleteRef = useRef<HTMLDivElement>(null);
    const listItems = useMemo(() => filterName(items, value), [items, value]);
    useOnClickOutside( autocompleteRef, () => setShowList(false));


    useEffect(() => {
        //Мне нужен selectItem.name из пропса, для стейта value, когда выбран пользователь, чтобы отображать в input полное имя юзера
        //Можно так записывать пропсы в стейт?
        // Мне просто кажется, что глобально в компоненте не нужно хранить value для данного компонента, оно индивидуально только для него,
        // поэтому я не знаю, как сделать по другому обновление этого value при изменении пользователя.
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

    const handleClearValue = () => {
        setValue('');
        onClear();
    };

    const onShowList = () => {
        if(value) setShowList(true);
    };

    const handleSelectItem = (id:number) => {
        if(selectItem && selectItem.id === id){
            // здесь я тоже беру значение из стейта, если повторно выбран тот же юзер в List
            setValue(selectItem.name);
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
                onClear={handleClearValue}
                onFocus={onShowList}
                placeholder={placeholder}
            />
            {  isShowList && <List items={listItems}  onSelect={handleSelectItem} notFoundElement={notFoundElement}/>  }
        </div>
    )
}

export default memo(Autocomplete);