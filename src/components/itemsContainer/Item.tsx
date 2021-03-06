import React from 'react';
import { IItemProps } from '../../common/commonInterfaces'


const Item:React.FC<IItemProps>  = ( props:IItemProps ) => {

    return (
        <div className="item" id={`item_${props.id}`} onClick={() => props.getItemInfos(props.id)}>
            <span>{props.name}</span>
        </div>
    )
};

export default Item;