import React, {useState, useEffect} from 'react';
import ListItem from './ListItem'
import {  IItem, IList, IUserInfo } from '../common/commonInterfaces';


interface IListProps extends IList {
    getUserInfos:(id:number) => void;   
} 

const List = (props: any ) => {
    const {users, getUserInfos, notFound} = props;
    console.log('users in list', users)

    const [usersList, updateUsersList] = useState([]);


    useEffect(() => {
        updateUsersList(users);

    }, [users]);

    const myList = () => usersList.map((user:any) => <ListItem key={user.id} {...user} getUserInfos={getUserInfos}/>);
    const notFoundUsers =() => <div className="item not_found"> <span>{notFound}</span></div>;


    return (
        <div className='autocomplite_list' id='autoList'>
            {(usersList.length)? myList() : notFoundUsers() }
        </div>
    )

   
}

export default List;