import React, { useEffect, useState} from 'react';
import {autocomplite} from '../common/autocompliteFunction';
import InputField from './InputField'
import List from './List';



const AutocompliteComponent = (props:any) => {

    const {users, getCurrentUserId, nameQuery} = props;

    const [query, changeQuery] = useState('');
    const [usersList, updateUsersList] = useState([]);
    const [isShowList, changeShowList] = useState(false);

    useEffect(() => {
        changeQuery(nameQuery);
    }, [nameQuery, isShowList]);



    useEffect(() => {

        const onHiddenList = (e:any) => {
            const list = document.getElementById('autoList');
            const id = e.target.id;
            const isItemClass = e.target.classList.contains('item');
            const isClose = (id !=='autoList' || id !== 'inputAutocomplite' || !isItemClass)? true: false;
            if(list && isClose){
                changeShowList(false);
            } 
        }
        document.addEventListener('click', onHiddenList)

        return () => document.removeEventListener('click', onHiddenList );

    }, [])


    useEffect(() => {
        const newList:any = autocomplite(users, query);
        if(newList){
            updateUsersList(newList);
        } else {
            updateUsersList([])
        }        
    }, [query, users]);

      const onInput = (e:any) => {
        const value = e.target.value;
        changeQuery(value);
        changeShowList(true);
      }

    const getUserInfos = (id:number):void =>{
        console.log('auto get', id);
        getCurrentUserId(id);
        changeShowList(false);
    }


    return(
        <div id="autocomplite">
            <InputField onInput={onInput} query={query} />
         { (isShowList) ? <List users={usersList} getUserInfos={getUserInfos}/>: null}
        </div>
    )
}

export default AutocompliteComponent;