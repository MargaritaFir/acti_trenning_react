import React from 'react';
import { IItemProps } from '../common/commonInterfaces'


const ListItem:React.FC<IItemProps>  = ( props:IItemProps ) => {

    return (
        <div className="item" id={`item_${props.id}`} onClick={() => props.getUserInfos(props.id)}>
            <span>{props.name}</span>
        </div>
    )
};

export default ListItem;