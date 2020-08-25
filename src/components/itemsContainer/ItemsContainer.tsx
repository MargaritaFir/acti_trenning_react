import React from 'react';
import Item from './Item';
import { IItemsContainerProps, IItem } from '../../common/commonInterfaces';


    const ItemsContainer:React.FC<IItemsContainerProps> = (props:IItemsContainerProps) => {

        const {getUserInfos, usersList} = props;
        return (
            <React.Fragment>
                {usersList.map((user:IItem) => <Item key={user.id} {...user} getUserInfos={getUserInfos}/>)}
            </React.Fragment>
            
        )
    }
    
    export default ItemsContainer;
