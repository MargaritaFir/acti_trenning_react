import React, { useEffect, useState } from 'react';
import {autocomplite} from '../../common/autocompliteFunction';
import InputComponent from '../inputComponent/InputComponent';
import List from '../autocompliteList/List';
import { IAutocompliteProps, IItem } from '../../common/commonInterfaces';


const AutocompliteComponent:React.FC<IAutocompliteProps> = ( props:IAutocompliteProps ) => {

    const { items, getCurrentItemId, nameQuery, placeholder, notFound } = props;

    const [ query, setQuery ] = useState<string>('');
    const [ itemsList, setItemsList ] = useState<IItem[]>([]);
    const [ isShowList, setShowList ] = useState<boolean>(false);
    const [ currentItemId, setCurrentItemId ] = useState<number|null>(null);

    useEffect(() => {
        setQuery(nameQuery);
    }, [nameQuery]);


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
        const newList:IItem[] | null = autocomplite(items, query);
        if(newList){
            setItemsList(newList);
        } else {
            setItemsList([]);
        }          
    }, [query, items]);


    useEffect(() => {
        if(!query) setShowList(false);  
    }, [query])

    const onInput = (e:React.ChangeEvent<HTMLInputElement>) => {
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
            <InputComponent 
                onInput={onInput} 
                query={query}
                clearQuery={clearQuery}
                onVisibleList={onVisibleList}
                placeholder={placeholder}
            />
            {  (isShowList) ?
                                <List 
                                    items={itemsList} 
                                    getItemInfos={getItemInfos}
                                    notFound={notFound}
                                /> 
                                : null
            }

        </div>
    )
}

export default AutocompliteComponent;