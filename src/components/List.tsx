import React, { useState, useEffect } from 'react';
import ListItem from './ListItem'
import {  IItem, IList } from '../common/commonInterfaces';


const List = ( props: IList ) => {
    const { users, getUserInfos, notFound } = props;
    // console.log('props in list', props.users);
    const [ usersList, updateUsersList ] = useState<IItem[]>([]);

    useEffect(() => {
        if(users) updateUsersList(users);

    }, [users]);


    const usersListView = () => usersList.map((user:IItem) => <ListItem key={user.id} {...user} getUserInfos={getUserInfos}/>);
    const notFoundUsers = () => <div className="item not_found"> <span>{notFound}</span></div>;


    return (
        <div className='autocomplite_list' id='autoList'>
            {(usersList.length)? usersListView() : notFoundUsers() }
        </div>
    )
}

export default List;