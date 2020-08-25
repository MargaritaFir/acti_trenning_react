import React, { useState, useEffect } from 'react';
import ItemsContainer from '../itemsContainer/ItemsContainer';
import NotFoundItem from './NotFoundItem';
import { IItem, IList } from '../../common/commonInterfaces';


const List:React.FC<IList> = ( props: IList ) => {
    const { users, getUserInfos, notFound } = props;

    const [ usersList, updateUsersList ] = useState<IItem[]>([]);

    useEffect(() => {
        if(users) updateUsersList(users);

    }, [users]);


    return (
        <div className='autocomplite_list' id='autoList'>
            {(usersList.length)? <ItemsContainer usersList={usersList} getUserInfos={getUserInfos}/> : <NotFoundItem notFound={notFound} /> }
        </div>
    )
}

export default List;