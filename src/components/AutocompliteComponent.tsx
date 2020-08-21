import React, { useEffect, useState } from 'react';
import {modifyUsers, getSelectedUser} from '../common/modifyUsers';
import {autocomplite} from '../common/autocompliteFunction';
import InputField from './InputField'
import List from './List';
import {IListProps} from '../common/commonInterfaces'


const AutocompliteComponent = (props:any) => {
    console.log('auto', props)
    const [query, changeQuery] = useState('');
    const [usersList, updateUsersList] = useState([]);
    console.log('usersList', usersList)


    useEffect(() => {
        const users =  modifyUsers(props.users);
        const newList:any = autocomplite(users, query);
        if(newList){
            updateUsersList(newList);
        } else {
            updateUsersList([])
        }        
    }, [query, props]);

      const onInput = (e:any) => {
        const value = e.target.value;
        changeQuery(value);
        // console.log('query', query);
      }

    const getUserInfos = (id:number):void =>{
        console.log('auto get', id);
        const currentUser = getSelectedUser(props.users, id);
        console.log(currentUser, 'current')
        changeQuery(getSelectedUser(props.users, id).name);
    }

    return(
        <div id="autocomplite">
            <InputField onInput={onInput} query={query}/>
            <List users={usersList} getUserInfos={getUserInfos}/>
        </div>
    )
}

export default AutocompliteComponent;