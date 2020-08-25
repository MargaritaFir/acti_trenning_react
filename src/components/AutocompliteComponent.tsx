import React, { useEffect, useState} from 'react';
import {autocomplite} from '../common/autocompliteFunction';
import InputField from './InputComponent';
import List from './List';
import { IAutocompliteProps, IItem } from '../common/commonInterfaces';


const AutocompliteComponent:React.FC<IAutocompliteProps> = ( props:IAutocompliteProps ) => {

    const { users, getCurrentUserId, nameQuery, placeholder, notFound } = props;

    const [ query, changeQuery ] = useState<string>('');
    const [ usersList, updateUsersList ] = useState<IItem[]>([]);
    const [ isShowList, changeShowList ] = useState<boolean>(false);
    const [ currentUserId, changeCurrentUserId ] = useState<number|null>(null);

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
        const newList:IItem[] | null = autocomplite(users, query);
        if(newList){
            updateUsersList(newList);
        } else {
            updateUsersList([]);
        }          
    }, [query, users]);


    useEffect(() => {
        if(!query) changeShowList(false)  
    }, [query])

    const onInput = (e:any) => {
        const value = e.target.value;
        changeQuery(value);
        changeShowList(true);
    };

    const getUserInfos = (id:number) =>{

        if(id === currentUserId ) {
            changeQuery(nameQuery);
            changeShowList(false);
            return;
        }
        changeCurrentUserId(id);
        getCurrentUserId(id);
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
            <InputField 
                onInput={onInput} 
                query={query}
                clearQuery={clearQuery}
                onVisibleList={onVisibleList}
                placeholder={placeholder}
            />
            {  (isShowList) ?
                                <List 
                                    users={usersList} 
                                    getUserInfos={getUserInfos}
                                    notFound={notFound}
                                /> 
                                : null
            }

        </div>
    )
}

export default AutocompliteComponent;