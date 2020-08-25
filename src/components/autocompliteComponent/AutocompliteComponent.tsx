import React, { useEffect, useState } from 'react';
import {autocomplite} from '../../common/autocompliteFunction';
import InputComponent from '../inputComponent/InputComponent';
import List from '../autocompliteList/List';
import { IAutocompliteProps, IItem } from '../../common/commonInterfaces';


const AutocompliteComponent:React.FC<IAutocompliteProps> = ( props:IAutocompliteProps ) => {

    const { items, getCurrentItemId, nameQuery, placeholder, notFound } = props;

    const [ query, changeQuery ] = useState<string>('');
    const [ itemsList, updateitemsList ] = useState<IItem[]>([]);
    const [ isShowList, changeShowList ] = useState<boolean>(false);
    const [ currentItemId, changeCurrentItemId ] = useState<number|null>(null);

    useEffect(() => {
        changeQuery(nameQuery);
    }, [nameQuery]);


    useEffect(() => {

        const onHiddenList = (e:any) => {
            const list = document.getElementById('autoList');
            const id = e.target.id;
            const isItemClass:boolean = e.target.classList.contains('item');
            const isClose:boolean = (id === 'autoList' || id === 'inputAutocomplite' || isItemClass) ? false : true;

            if(list && isClose){
                changeShowList(false);
            } 
        }

        document.addEventListener('click', onHiddenList)

        return () => document.removeEventListener('click', onHiddenList );

    }, []);


    useEffect(() => {
        const newList:IItem[] | null = autocomplite(items, query);
        if(newList){
            updateitemsList(newList);
        } else {
            updateitemsList([]);
        }          
    }, [query, items]);


    useEffect(() => {
        if(!query) changeShowList(false);  
    }, [query])

    const onInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        changeQuery(value);
        changeShowList(true);
    };

    const getItemInfos = (id:number) =>{

        if(id === currentItemId ) {
            changeQuery(nameQuery);
            changeShowList(false);
            return;
        }
        changeCurrentItemId(id);
        getCurrentItemId(id);
        changeShowList(false);
    };


    const clearQuery = () => {
        changeQuery('');
    };


    const onVisibleList = () => {
        if(query) changeShowList(true);
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