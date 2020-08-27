import React, { useEffect, useState, useMemo } from 'react';
import {filter} from '../../common/utils/filter';
import Input from '../Input/Input';
import List from './List/List';
import { IItem } from '../../common/interfaces';
import './autocomplete.scss';


interface IProps  {
    items:IItem[];
    getCurrentItemId:(id:number|null) => void;  
    placeholder: string;
    notFound:string;
    nameQuery:string
};

const Autocomplete:React.FC<IProps> = ( { items, getCurrentItemId, nameQuery, placeholder, notFound } ) => {


    const [ query, setQuery ] = useState<string>('');
    const [ isShowList, setShowList ] = useState<boolean>(false);
    const [ currentItemId, setCurrentItemId ] = useState<number|null>(null);

    useEffect(() => {
        setQuery(nameQuery);
    }, [nameQuery]);

    const newList:IItem[] = useMemo(() => filter(items, query), [items, query]);

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
        if(!query) setShowList(false);  
    }, [query])

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        setShowList(true);
        if(!value){
            getCurrentItemId(null);
        }
    };

    const getItemInfos = (id:number) =>{

        if(id === currentItemId ) {
            setQuery(nameQuery);
            setShowList(false);
            return;
        }
        setCurrentItemId(id);
        getCurrentItemId(id);
        setShowList(false);
    };


    const clearQuery = () => {
        setQuery('');
        getCurrentItemId(null);
    };


    const onVisibleList = () => {
        if(query) setShowList(true);
    };

    return (
        <div className='form_autocomplite' id="autocomplite">
            <Input 
                onChange={onChange} 
                value={query}
                onClear={clearQuery}
                onFocus={onVisibleList}
                placeholder={placeholder}
            />
            {  isShowList && <List items={newList}  getItemInfos={getItemInfos} notFound={notFound}/>  }

        </div>
    )
}

export default Autocomplete;