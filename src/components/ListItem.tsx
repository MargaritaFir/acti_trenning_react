import React from 'react';

interface IItem{
    id: number,
    name: string,
}

const ListItem = (props:any) => {
    console.log('listItem', props)

    return (
        <div className="item" id={`item_${props.id}`} onClick={() => props.getUserInfos(props.id)}>
            <span>{props.name}</span>
        </div>
    )
};

export default ListItem;