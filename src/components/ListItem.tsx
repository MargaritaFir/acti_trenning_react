import React from 'react';
import {IItem} from '../common/commonInterfaces'

interface IItemProps extends IItem{
    getUserInfos:(id:number) => void;
}

const ListItem = (props:IItemProps) => {

    return (
        <div className="item" id={`item_${props.id}`} onClick={() => props.getUserInfos(props.id)}>
            <span>{props.name}</span>
        </div>
    )
};

export default ListItem;