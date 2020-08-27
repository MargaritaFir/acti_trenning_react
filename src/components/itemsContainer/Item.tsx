import React from 'react';

interface IProps {
    id: number,
    name: string,
    getItemInfos:(id:number) => void;
};

const Item:React.FC<IProps> = ( { id, name, getItemInfos } ) => {

    return (
        <div className="item" id={`item_${id}`} onClick={() => getItemInfos(id)}>
            <span>{name}</span>
        </div>
    )
};

export default Item;