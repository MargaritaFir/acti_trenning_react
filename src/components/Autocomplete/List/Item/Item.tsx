import React, {useCallback} from 'react';

interface IProps {
    id: number,
    name: string,
    getItemInfos:(id:number) => void;
};

const Item:React.FC<IProps> = ( { id, name, getItemInfos } ) => {

    const handleClick = useCallback(() => getItemInfos(id), [id, getItemInfos])

    return (
        <div className="item" id={`item_${id}`} onClick={handleClick}>
            <span>{name}</span>
        </div>
    )
};

export default Item;