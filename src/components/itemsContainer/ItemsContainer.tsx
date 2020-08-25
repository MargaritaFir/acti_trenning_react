import React from 'react';
import Item from './Item';
import { IItemsContainerProps, IItem } from '../../common/commonInterfaces';


    const ItemsContainer:React.FC<IItemsContainerProps> = (props:IItemsContainerProps) => {

        const {getItemInfos, itemsList} = props;
        return (
            <React.Fragment>
                {itemsList.map((item:IItem) => <Item key={item.id} {...item} getItemInfos={getItemInfos}/>)}
            </React.Fragment>
            
        )
    }
    
    export default ItemsContainer;
