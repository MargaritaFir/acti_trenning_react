import React, {useState, useEffect} from 'react';
import ListItem from './ListItem'
import {  IItem, IListProps, IUserInfo } from '../common/commonInterfaces';

// interface  IListPropsExtend extends IListProps {
//     getUserInfos(id:number):void
// }


const List = (props: any ) => {
    const {users, getUserInfos} = props;
    console.log('users in list', users)

    const [usersList, updateUsersList] = useState([]);

    useEffect(() => {
        updateUsersList(users)
    })

    useEffect(() => {
        updateUsersList(props.users);

    }, [props.users]);

    const myList = () => usersList.map((user:any) => <ListItem key={user.id} {...user} getUserInfos={getUserInfos}/>)

    if(usersList.length){
        return (<>{myList()}</>)
    } else {
        return <div> Empty Element</div>
    }

   
}

export default List;