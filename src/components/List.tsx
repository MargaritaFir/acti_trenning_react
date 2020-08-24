import React, {useState, useEffect} from 'react';
import ListItem from './ListItem'
import {  IItem, IList, IUserInfo } from '../common/commonInterfaces';


interface IListProps extends IList {
    getUserInfos:(id:number) => void;   
} 

const List = (props: any ) => {
    const {users, getUserInfos} = props;
    // console.log('users in list', users)

    const [usersList, updateUsersList] = useState([]);

    useEffect(() => {
        updateUsersList(users)
    }, [])

    useEffect(() => {
        updateUsersList(props.users);

    }, [props.users]);

    const myList = () => usersList.map((user:any) => <ListItem key={user.id} {...user} getUserInfos={getUserInfos}/>)

    if(usersList.length){
        return (<div id='autoList'>{myList()}</div>)
    } else {
        return null
    }

   
}

export default List;